const request = require('supertest');
const chai = require('chai');
const assert = require('chai').assert;
const app = require('../app');
const testQueries = require('./test-queries');
const startUrl = '/v1/quote/car-insurance';


// tests for POST using MOCHA:
describe('App [POST]', function() {

  // tests for POST with body params
  describe('body params tests [POST]', function(){

    // test 1a - no body params
    it('should return status 400: if 2/2 parameters missing [POST]', function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send({
        "car_value": null,
        "driver_birthdate": null
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

    // test 2a - only 1 body param present
    it('should return status 400: if 1/2 body parameters missing [POST]', function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send({
        "car_value": 5000.50,
        "driver_birthdate": null
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

    // test 3a - 1 body param incorrect
    it('should return status 400: if 1/2 body parameters missing [POST]', function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send({
        "car_value": 'incorrect value',
        "driver_birthdate": "01/01/1990"
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.failureResponse, `res.body has wrong content`);
        done(err);
      });
    });

  });

  // ==========

  // tests for POST with query params
  describe('return correct values [POST]', function(){

    // test 01a
    it(`should return correct values given [POST] ${JSON.stringify(testQueries.query01a)}`, function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query01a)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response01, `res.body has wrong content`);
        done(err);
      });
    });

    // test 02a
    it(`should return correct values given [POST] ${JSON.stringify(testQueries.query02a)}`, function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query02a)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response02, `res.body has wrong content`);
        done(err);
      });
    });

    // test 03a
    it(`should return correct values given [POST] ${JSON.stringify(testQueries.query03a)}`, function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query03a)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response03, `res.body has wrong content`);
        done(err);
      });
    });

    // test 04a
    it(`should return error if car value <= 0 [POST] ${JSON.stringify(testQueries.query04a)}`, function(done) {
      request(app)
      .post(startUrl)
      .set('Accept', 'application/json')
      .send(testQueries.query04a)
      .expect('Content-Type', /json/)
      .expect(400)
      .end(function(err, res) {
        assert.deepEqual(res.body, testQueries.response04, `res.body has wrong content`);
        done(err);
      });
    });

  });
});
