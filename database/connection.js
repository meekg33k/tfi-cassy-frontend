var mysql = require('mysql');
/*var connection = mysql.createConnection({
  host: 'cassy-mysql-instance1.c49puvquqrxu.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'awsadminuser',
  password: 'tficassy',
  database: 'cassydev'
});*/

var connection = mysql.createConnection({
  host: '138.68.51.129',
  port: 3306,
  user: 'appuser',
  password: 'APP_pass1',
  database: 'cassydev'
});


module.exports = connection;
