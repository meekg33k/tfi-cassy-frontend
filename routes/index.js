var express = require('express');
var router = express.Router();
var apiManager = require('../services/api-manager');
var passport = require('../services/passport-config');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(__dirname.substring(0, __dirname.length - 6) + '/public/index.html');
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Redirect to reset password page
  res.status(200).send(req.user);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;