var express = require('express');
var router = express.Router();
var apiManager = require('../services/api-manager');
var passport = require('passport');


/* GET home page. */
router.get('/', (req, res, next) => {
  //res.render('index', { title: 'Cassy-server', description: 'This site is under construction' });
  res.sendFile(__dirname.substring(0, __dirname.length - 6) + '/public/index.html');
});


// Login
router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  console.log("Starting validation!!");
  apiManager.validateLogin({username, password}, (err, result) => {
    if (err) {
      console.error('No user for the given id ' + req.params.userid + err);
      res.status(500).send({err: err.message});
    }

    if (result.length = 0){
      res.status(403).send({err: "No such user found"});
    }

    var result = JSON.stringify(result[0]);
    console.log("===>"+result);

    var validatedUser = {
      userId: result.user_id,
      firstName: result.first_name,
      lastName: result.last_name,
      username: result.username,
      role: result.role,
      managerId: result.manager_user_id
    }

    console.log("^^^^^"+validatedUser);

    res.status(200).json(validatedUser);
  });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
