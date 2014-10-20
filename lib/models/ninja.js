"use strict";

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;

var schema = new Schema({
  name: { type: String, required: true },
  health: { type: Number, default: 100 },
  weapons: [{
    kind: { type: String, required: true },
    name: { type: String }
  }],
  skills: [String],
  abilities: [String],

  zombiesKilled: [{
    type: Schema.Types.ObjectId, ref: 'Zombie'
  }]
});

module.exports = Mongoose.model('Ninja', schema);