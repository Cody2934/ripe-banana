const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  adddress: {
    city: String,
    state: String,
    country: String
  }
});

module.exports = mongoose.model('Studio', schema);
