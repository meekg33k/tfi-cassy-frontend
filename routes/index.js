var express = require('express');
var router = express.Router();
var apiManager = require('../services/api-manager');
var passport = require('../services/passport-config');


/* GET home page. */
router.get('/', (req, res, next) => {
  //res.render('index', { title: 'Cassy-server', description: 'This site is under construction' });
  res.sendFile(__dirname.substring(0, __dirname.length - 6) + '/public/index.html');
});


// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  apiManager.firstLogin(JSON.stringify(req.user[0].user_id), (err, result) => {
    if (err) {
      console.error(`Error updating first login status ${err}`);
    }
    
    res.status(200).send(req.user);
  });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;