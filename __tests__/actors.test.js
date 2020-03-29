const request = require('supertest');
const app = require('../lib/app');
const { getActor, getActors } = require('../db/data-helpers');

describe('actor routes', () => {
  it('creates an actor', () => {
    return request(app)
      .post('/api/v1/actors')
      .send({
        name: 'Brotha',
        dob: '1970-01-01T00:00:01.994Z',
        pob: 'LA'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Brotha',
          dob: '1970-01-01T00:00:01.994Z',
          pob: 'LA',
          __v: 0
        });
      });
  });

  it('gets an actor by id', async() => {
    const actor = await getActor();
    return request(app)
      .get(`/api/v1/actors/${actor._id}`)
      .then(res => {
        expect(res.body).toEqual(actor);
      });
  });

  it('gets all actors', async() => {
    const actors = await getActors();
    return request(app)
      .get('/api/v1/actors')
      .then(res => {
        expect(res.body).toEqual(actors);
      });
  });

  it('updates an actor by id', async() => {
    const actor = await getActor();
    return request(app)
      .patch(`/api/v1/actors/${actor._id}`)
      .send({ name: 'shiddy actor' })
      .then(res => {
        expect(res.body).toEqual({
          ...actor,
          name: 'shiddy actor'
        });
      });
  });

  it('deletes an actor by id', async() => {
    const actor = await getActor();
    return request(app)
      .delete(`/api/v1/actors/${actor._id}`)
      .then(res => {
        expect(res.body).toEqual(actor);
      });
  });

});
