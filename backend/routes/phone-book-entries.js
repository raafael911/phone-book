var express = require('express');
var router = express.Router();
var database = require('../database');
var ObjectID = require('mongodb').ObjectID;
var debug = require('debug')('backend:resource');

var tableName = 'phoneBookEntries';

/* GET phoneBookEntries listing */
router.get('/', function(req, res) {

  database.get().collection(tableName)
    .find()
    .toArray()
    .then(data => res.json(data))
    .except(err => {
      debug(err);
      res.sendStats(500);
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

  database.get().collection(tableName)
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
    .updateOne({_id: new ObjectID(req.params.id)}, {$set: req.body.json})
    .then(opResult => {
      if (opResult.result.ok != 1 || opResult.deleteCount < 1) {
        res.sendStatus(404);
      } else {
        res.sendStatus(202);
      }
    })
    .catch(err => debug(err));
});

module.exports = router;
