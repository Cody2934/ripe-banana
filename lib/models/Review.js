const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  filmId: {
    type: mongoose.Schema.Types.ObjectId
  },
  review: {
    reviewText: {
      type: String,
      maxLength: 140,
      required: true
    } }
});

schema.statics.topReviews = function() {
  return this
    .aggregate([
      {
        '$sort': {
          'rating': -1
        }
      }, {
        '$limit': 100
      }
    ]);
};
module.exports = mongoose.model('Review', schema);
