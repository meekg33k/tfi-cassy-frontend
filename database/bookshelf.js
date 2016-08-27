/*// Database configuration
var Bookshelf = require('bookshelf');

var dbConfig = {
  client: 'mysql',
  connection: {
    host: 'cassy-mysql-instance1.c49puvquqrxu.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'awsadminuser',
    password: 'tficassy',
    database: 'cassydev',
    charset: 'UTF8_GENERAL_CI'
  }
};

var DB = Bookshelf.initialize(dbConfig);
// Bookshelf js initialaization
// var knex = require('knex')(dbConfig);
// var bookshelf = require('bookshelf')(knex);

module.exports.DB = DB;
*/
// Database configuration
var dbConfig = {
  client: 'mysql',
  connection: {
    host: 'cassy-mysql-instance1.c49puvquqrxu.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'awsadminuser',
    password: 'tficassy',
    database: 'cassydev'
  }
};

// Bookshelf js initialaization
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
