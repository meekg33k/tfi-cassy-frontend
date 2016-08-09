var DB = require('../database/bookshelf').DB;

var User = DB.Model.extend({
   tableName: 'user',
   idAttribute: 'user_id',
});

module.exports = {
   User: User
};
