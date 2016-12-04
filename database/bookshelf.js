// Database configuration
var dbConfig = {
  client: 'mysql',
  connection: {
    host: '138.68.51.129',
    port: 3306,
    user: 'appuser',
    password: 'APP_user1',
    database: 'cassydev'
  }
};

// Bookshelf js initialaization
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
