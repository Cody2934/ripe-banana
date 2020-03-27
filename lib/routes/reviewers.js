const { Router } = require('express');
const Reviewer = require('../models/Reviewer');
const Review = require('../models/Review');

module.exports = Router()
  .post('/', (req, res, next) => {
    Reviewer
      .create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Reviewer
      .findById(req.params.id)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Reviewer
      .find()
      .then(reviewers => res.send(reviewers))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Reviewer
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(reviewer => res.send(reviewer))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    if(Review.find({ _id: req.params.id })) {
      res.send('Cant touch this');
    }
    else {
      Reviewer
        .findByIdAndDelete(req.params.id)
        .then(reviewer => res.send(reviewer))
        .catch(next);
    }})
;
