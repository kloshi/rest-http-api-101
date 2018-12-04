const assert = require('chai').assert;
const app = require('../app');


// sample TESTS using MOCHA:

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('App', function() {

  describe('sayHello() tests', function(){
    // test 1
    it('sayHello() should return Hello!', function(){
      let result = app.sayHello();
      assert.equal(result, 'Hello!');
    });
    // test 2
    it('sayHello should return type string', function(){
      let result = app.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers() tests', function(){
    // test 1
    it('addNumbers should return > 5', function(){
      let result = app.addNumbers(4,4);
      assert.isAbove(result, 5);
    });
    // test 2
    it('addNumbers should return a number', function(){
      let result = app.addNumbers(4,4);
      assert.typeOf(result, 'number');
    });
  });

  describe('calculatePremium() tests', function(){
    // test 1
    it('calculatePremium should return an object', function(){
      let result = app.calculatePremium("5000,33","01/05/1990");
      assert.typeOf(result, 'object');
    });
    // test 2
    it('calculatePremium should return "civil": 500 for (carValue="5000,33", driverBirthdate="01/05/1990")', function(){
      let result = app.calculatePremium("5000,33","01/05/1990");
      assert.equal(result.civil, 500);
    });
    // test 2a
    it('calculatePremium should return "omnium": 150.01 for (carValue="5000,33", driverBirthdate="01/05/1990")', function(){
      let result = app.calculatePremium("5000,33","01/05/1990");
      assert.equal(result.omnium, 150.01);
    });
    // test 3
    it('calculatePremium should return "civil": 500 for (carValue="20000,999", driverBirthdate="11/05/1976")', function(){
      let result = app.calculatePremium("20000,999","11/05/1976");
      assert.equal(result.civil, 500);
    });
    // test 3a
    it('calculatePremium should return "omnium": 600.03 for (carValue="20000,999", driverBirthdate="11/05/1976")', function(){
      let result = app.calculatePremium("20000,999","11/05/1976");
      assert.equal(result.omnium, 600.03);
    });
    // test 4
    it('calculatePremium should return "civil": 1000 for (carValue="5999,50", driverBirthdate="1/01/1999")', function(){
      let result = app.calculatePremium("5999,50","1/01/1999");
      assert.equal(result.civil, 1000);
    });
    // test 4a
    it('calculatePremium should return "omnium": 179.99 for (carValue="5999,50", driverBirthdate="1/01/1999")', function(){
      let result = app.calculatePremium("5999,50","1/01/1999");
      assert.equal(result.omnium, 179.99);
    });
  });

});

