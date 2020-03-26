const chance = require('chance').Chance();
const Studio = require('../lib/models/Studio');

module.exports = async({ studiosToCreate = 5 } = {}) => {

  const studios = await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: `${chance.animal()}`,
    address: {
      name: `${chance.word()}`,
      state: `${chance.word()}`,
      country: `${chance.word()}`
    }
  })));


};
