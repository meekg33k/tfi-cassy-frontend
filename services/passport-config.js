var dbConfig = require('../database/connection');
var mysql = require('mysql');
var passport = require('passport');
var connection = mysql.createConnection(dbConfig.connection);
var LocalStrategy = require('passport-local').Strategy;

// Set up connection
connection.query('USE ' + dbConfig.database);

// Configure Passport strategy
module.exports = function(){

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
            done(err, rows[0]);
        });
    });

    passport.use('local-login', new LocalStrategy(
      (username, password, done) => {
        // Find user by username
        connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (err, user) => {
          if (err) {
            return done(err);
          }

          if (!user.length) {
              return done(null, false, {message: 'No user found.'}); // req.flash is the way to set flashdata using connect-flash
          }

          if (!user) {
            return done(null, false, { message: 'Incorrect username or password.' });
          }

          return done(null, user[0]);
        });
      }
    ));

}
