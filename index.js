"use strict";

var mongoUri = 'mongodb://localhost/ninjas-versus-zombies';

var Mongoose = require('mongoose')
  , Express = require('express')
  , BodyParser = require('body-parser')
  , App = Express();

Mongoose.connect(mongoUri);

var Zombie = require('./lib/models/zombie')
  , Ninja = require('./lib/models/ninja');


App.use(BodyParser.json());

App.get('/v1/zombies', function (req, res) {

  Zombie.find().populate('ninjasConsumed').exec(function (err, zombies) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(zombies);
  });
});

App.get('/v1/ninjas', function (req, res) {

  Ninja.find().populate('zombiesKilled').exec(function (err, ninjas) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.status(200).send(ninjas);
  });

});


App.listen(3000, function () {
  console.log('Console started at http://localhost:3000');
});


