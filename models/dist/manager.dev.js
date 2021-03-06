"use strict";

var mongoose = require('mongoose');

var managerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  nickName: {
    type: String
  },
  avatar: {
    type: String
  },
  roles: {
    type: String
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Manager', managerSchema);