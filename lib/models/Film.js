const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  studioId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  released: {
    type: Number,
    min: 1900,
    max: 2020
  },
  cast: [{
    role: {
      type: String
    },
    actorId: {
      type: mongoose.Schema.Types.ObjectId
    }
  }]
});

module.exports = mongoose.model('Film', schema);
