const chance = require('chance').Chance();
const Studio = require('../lib/models/Studio');
const Actor = require('../lib/models/Actor');
const Reviewer = require('../lib/models/Reviewer');

module.exports = async({ studiosToCreate = 5, actorsToCreate = 5, reviewersToCreate = 5 } = {}) => {

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


};
