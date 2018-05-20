var database = require('../database');

var findAll = function() {

  console.log(database);
  return database.dbHandle.collection('phone-book-entries')
    .find()
    .toArray();
};

module.exports = { findAll };
