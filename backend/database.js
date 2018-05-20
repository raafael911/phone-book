var MongoClient = require('mongodb').MongoClient;
var debug = require('debug')('backend:database');

// Database name can be overriden by environment parameter `database`
var databaseName = process.env.database || 'phoneBook';

// Private database handle
var _dbHandle = null;

var database = {

  /* Connects to a local mongodb database on port 27017. This method automatically
  connects to the database specified by `databaseName`. */

  connect: function() {

    MongoClient.connect('mongodb://localhost:27017', function(err, client) {

      if (err) {
        debug(err);
      }

      debug(`Connected to database ${databaseName}`);

      _dbHandle = client.db(databaseName);
    });
  },

  /* Get the connected and ready to use database handle. For documentation on how
  to use this handle see http://mongodb.github.io/node-mongodb-native/3.0/api/Db.html. */
  get: function() {

    if (!_dbHandle) {

      throw 'Database connection not initialized yet!';
    }

    return _dbHandle;
  }
};

module.exports = database;
