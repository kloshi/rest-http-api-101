const request = require('supertest');
const chai = require('chai');
const assert = require('chai').assert;
const app = require('../app');
const testQueries = require('./test-queries');
const startUrl = '/v1/quote/car-insurance';


// tests for GET using MOCHA:
describe('App [GET]', function() {

  // tests for GET with query params
  describe('query params tests [GET]', function(){

    // test 1b - no query params
    it('should return status 400: if 2/2 parameters missing [GET]', function(done){
      request(app)
      .get(startUrl)
      .send('')
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

    // test 2b - only 1 query param present
    it('should return status 400: if 1/2 query parameters missing [GET]', function(done){
      request(app)
      .get(startUrl)
      .send('driver_birthdate="11/05/1990"')
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

    // test 3b - 1 query param incorrect
    it('should return status 400: if 1/2 query parameters missing [GET]', function(done){
      request(app)
      .get(startUrl)
      .send('car_value=5000.50&driver_birthdate="incorrect date"')
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

  });

  // =========

  // tests for GET with query params
  describe('return correct values [GET]', function(){

    // test 01b
    it(`should return correct values given [GET] ${JSON.stringify(testQueries.query01b)}`, function(done) {
      request(app)
      .get(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query01b)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response01, `res.body has wrong content`);
        done(err);
      });
    });

    // test 02b
    it(`should return correct values given [GET] ${JSON.stringify(testQueries.query02b)}`, function(done) {
      request(app)
      .get(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query02b)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response02, `res.body has wrong content`);
        done(err);
      });
    });

    // test 03b
    it(`should return correct values given [GET] ${JSON.stringify(testQueries.query03b)}`, function(done) {
      request(app)
      .get(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query03b)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response03, `res.body has wrong content`);
        done(err);
      });
    });

    // test 04b
    it(`should return error if car value <= 0 [GET] ${JSON.stringify(testQueries.query04b)}`, function(done) {
      request(app)
      .get(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query04b)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response04, `res.body has wrong content`);
        done(err);
      });
    });

  });
});
