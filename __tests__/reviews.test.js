const request = require('supertest');
const app = require('../lib/app');
const { 
  getReviewer, 
  getFilm,
  getReview,
  getReviews
} = require('../db/data-helpers');

describe('review routes', () => {
  it('creates a review', async() => {
    const reviewer = await getReviewer();
    const film = await getFilm();
    return request(app)
      .post('/api/v1/reviews')
      .send({
        rating: 5,
        reviewerId: reviewer._id,
        filmId: film._id,
        review: {
          reviewText: 'this movie was amazeballs' 
        }
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          rating: 5,
          reviewerId: reviewer._id,
          filmId: film._id,
          review: { 
            reviewText: 'this movie was amazeballs' 
          },
          __v: 0
        });
      });
  });

  it('gets a review by id', async() => {
    const review = await getReview();
    return request(app)
      .get(`/api/v1/reviews/${review._id}`)
      .then(res => {
        expect(res.body).toEqual(review);
      });
  });

  it('gets all reviews', async() => {
    const reviews = await getReviews();
    return request(app)
      .get('/api/v1/reviews')
      .then(res => {
        expect(res.body).toEqual(reviews);
      });
  });

  it('deletes a review by id', async() => {
    const review = await getReview();
    return request(app)
      .delete(`/api/v1/reviews/${review._id}`)
      .then(res => {
        expect(res.body).toEqual(review);
      });
  });

  it('it returns top 100 reviews', async() => {
    return request(app)
      .get('/api/v1/reviews/top-rated')
      .then(res => {
        expect(res.body).toEqual([
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
          { _id: expect.any(String), rating: expect.any(Number), reviewerId: expect.any(String), filmId: expect.any(String), review: { reviewText: expect.any(String) }, __v: 0 },
        ]);
      });
  });
});
