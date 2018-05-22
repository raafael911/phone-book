var express = require('express');
var router = express.Router();
var database = require('../database');
var ObjectID = require('mongodb').ObjectID;
var debug = require('debug')('backend:resource');

var tableName = 'phoneBookEntries';
var allowedCategories = ['business', 'private', 'mobile'];
var phoneNumberRegex = /[0-9]*\/*(\+49)*[ ]*(\([0-9]+\))*([ ]*(-|–)*[ ]*[0-9]+)*/;
var phoneBookEntryKeys = ['firstName', 'lastName', 'phoneNumbers'];
var phoneNumberKeys = ['phoneNumber', 'category'];

// Middleware function to call checkJsonPayload() for all POST and PUT requests.
router.all('*', function(req, res, next) {

  if (['POST', 'PUT'].includes(req.method) && !checkJsonPayload(req.body)) {

    res.sendStatus(422);
    return;
  }

  next();
});

/* GET phoneBookEntries listing */
router.get('/', function(req, res) {

  database.get().collection(tableName)
    .find()
    .toArray()
    .then(opResult => res.json(opResult))
    .catch(err => {

      debug(err);
      res.sendStats(404);
    });
});

/* GET single phoneBookEntry */
router.get('/:id', function(req, res) {

  database.get().collection(tableName)
    .findOne({_id: new ObjectID(req.params.id)})
    .then(opResult => res.json(opResult))
    .catch(err => {

      debug(err);
      res.sendStats(404);
    });
});

/* POST create phoneBookEntry */
router.post('/', function(req, res) {

  createRecord(req, res);
});

/* DELETE phoneBookEntry */
router.delete('/:id', function(req, res) {

  database.get().collection(tableName)
    .deleteOne({_id: new ObjectID(req.params.id)})
    .then(opResult => {

      if (opResult.result.ok != 1 || opResult.deletedCount < 1) {

        res.sendStatus(404);
      } else {

        res.sendStatus(204);
      }
    })
    .catch(err => debug(err));
});

/* PUT update phoneBookEntry */
router.put('/:id', function(req, res) {

  database.get().collection(tableName)
  .findOne({_id: new ObjectID(req.params.id)})
  .then(opResult => {

    if (opResult) {

      updateRecord(req, res);
    } else {

      createRecord(req, res);
    }
  });
});

/**
* This function updates a record.
*
* Tries to update a database document. On success this function sends the
* HTTP 201 code to the client. If an error occurs an HTTP error code will
* be sent to the client.
*
* @param {Object} req an ExpressJS Request object
* @param {Object} res an ExpressJS Response object
* @returns {Promise} the promise of the database call
*/
var updateRecord = function(req, res) {

  return database.get().collection(tableName)
    .updateOne({_id: new ObjectID(req.params.id)}, {$set: req.body})
    .then(opResult => {

      if (opResult.result.ok != 1) {

        res.sendStatus(404);
      } else {

        res.sendStatus(204);
      }
    })
    .catch(err => {

      debug(err);
      res.sendStatus(500);
    });
}

/**
 * This function creates a new record.
 *
 * Tries to create a new database document. On success this function sends the
 * resulting JSON back to the client. If an error occurs an HTTP error code will
 * be sent to the client.
 *
 * @param {Object} req an ExpressJS Request object
 * @param {Object} res an ExpressJS Response object
 * @returns {Promise} the promise of the database call
 */
var createRecord = function(req, res) {

  return database.get().collection(tableName)
    .insertOne(req.body)
    .then(opResult => {

      if (opResult.ops.length < 1) {

        res.sendStatus(500);
      } else {

        res.json(opResult.ops[0]);
      }
    })
    .except(err => {

      debug(err);
      res.sendStatus(500);
    });
}

/**
 * This function checks if JSON payload fulfills the protocol trait and removes _id.
 *
 * Properties are checked against the protocol trait. Additionally this function
 * removes `json._id` if it is present.
 *
 * @param {Object} json a JSON Object to check
 * @returns {boolean} true if payload fulfills the trait, false otherwise
 */
var checkJsonPayload = function(json) {

  if (json._id) {

    delete json._id;
  }

  let noAdditionalProperties = Object.keys(json).filter(key => phoneBookEntryKeys.includes(key))
    &&
    (
      Array.isArray(json.phoneNumbers) &&
      json.phoneNumbers.every(contact => Object.keys(contact).filter(key => phoneNumberKeys.includes(key)))
    );

  let firstNameOk = (typeof json.firstName === 'string') && json.firstName.length > 0;
  let lastNameOk = (typeof json.lastName === 'string') && json.lastName.length > 0;

  let categoriesOk = Array.isArray(json.phoneNumbers) &&
    json.phoneNumbers.every(contact => allowedCategories.includes(contact.category));

  let phoneNumbersOk = Array.isArray(json.phoneNumbers) &&
    json.phoneNumbers.every(contact => phoneNumberRegex.test(contact.phoneNumber));

  return noAdditionalProperties && firstNameOk && lastNameOk && categoriesOk && phoneNumbersOk;
};

module.exports = router;
