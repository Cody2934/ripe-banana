const request = require('supertest');
const app = require('../lib/app');
require('../db/data-helpers');


describe('studio routes', () => {
  it('creates a studio', () => {
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Warn A Brotha',
        address: {
          city: 'LA',
          state: 'CA',
          country: 'the best'
        }
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Warn A Brotha',
          address: {
            city: 'LA',
            state: 'CA',
            country: 'the best'
          },
          __v: 0
        });
      });
  });
});
