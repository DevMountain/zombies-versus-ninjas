"use strict";

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema;

var schema = new Schema({
  name: { type: String, required: true },
  health: { type: Number, default: 100 },
  attachedAppendages: [{
    name: { type: String, enum: ['Arm', 'Leg', 'Torso', 'Head', 'Foot'], default: 'Head', unique: true }
  }],
  skills: [String],
  abilities: [String],

  ninjasConsumed: [{
    type: Schema.Types.ObjectId, ref: 'Ninja'
  }]
});

module.exports = Mongoose.model('Zombie', schema);