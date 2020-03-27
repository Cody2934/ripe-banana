const chance = require('chance').Chance();
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');
const Film = require('../lib/models/Film');
const Review = require('../lib/models/Review');

const Reviewer = require('../lib/models/Reviewer');

module.exports = async({ studiosToCreate = 5, actorsToCreate = 5, reviewersToCreate = 5, filmsToCreate = 5, reviewsToCreate = 101 } = {}) => {

  const studios = await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: `${chance.animal()}`,
    address: {
      name: `${chance.word()}`,
      state: `${chance.word()}`,
      country: `${chance.word()}`
    }
  })));

  const actors = await Actor.create([...Array(actorsToCreate)].map(() => ({
    name: `${chance.animal()}`,
    dob: chance.date(),
    pob: `${chance.word()}`
  })));

  const reviewers = await Reviewer.create([...Array(reviewersToCreate)].map(() => ({
    name: `${chance.word()}`,
    company: `${chance.animal()}`
  })));

  const films = await Film.create([...Array(filmsToCreate)].map(() => ({
    title: chance.animal(),
    studioId: chance.pickone(studios)._id,
    released: chance.integer({ min: 1900, max: 2020 }),
    cast: [{
      role: `${chance.word()}`,
      actorId: chance.pickone(actors)._id
    }]
  })));

  const reviews = await Review.create([...Array(reviewsToCreate)].map(() => ({
    rating: chance.integer({ min: 1, max: 5 }),
    reviewerId: chance.pickone(reviewers)._id,
    filmId: chance.pickone(films)._id,
    review: {
      reviewText: chance.sentence()
    }
  })));
};
