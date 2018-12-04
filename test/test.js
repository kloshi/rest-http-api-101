const assert = require('chai').assert;
const app = require('../app');


// sample TESTS using MOCHA:

describe('App', function() {

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
      let result = app.getPremium(5000.33,"01/05/1990");
      // console.log('result = ', result);
      // console.log('result.success = ', result.success);
      // console.log('result.eligible = ', result.eligible);
      // console.log('result.premiums = ', result.premiums);
      // console.log('result.premiums.civil_liability = ', result.premiums.civil_liability);
      // console.log('result.premiums.omnium = ', result.premiums.omnium);
      assert.typeOf(result, 'object');
    });
    // test 2
    it('calculatePremium should return "civil_liability": 500 for (carValue="5000.33", driverBirthdate="01/05/1990")', function(){
      let result = app.getPremium(5000.33,"01/05/1990");
      assert.equal(result.premiums.civil_liability, 500);
    });
    // test 2a
    it('calculatePremium should return "omnium": 150.01 for (carValue="5000.33", driverBirthdate="01/05/1990")', function(){
      let result = app.getPremium(5000.33,"01/05/1990");
      assert.equal(result.premiums.omnium, 150.01);
    });
    // test 3
    it('calculatePremium should return "civil_liability": 500 for (carValue="20000.999", driverBirthdate="11/05/1976")', function(){
      let result = app.getPremium(20000.999,"11/05/1976");
      assert.equal(result.premiums.civil_liability, 500);
    });
    // test 3a
    it('calculatePremium should return "omnium": 600.03 for (carValue="20000.999", driverBirthdate="11/05/1976")', function(){
      let result = app.getPremium(20000.999,"11/05/1976");
      assert.equal(result.premiums.omnium, 600.03);
    });
    // test 4
    it('calculatePremium should return "civil_liability": 1000 for (carValue="5999.50", driverBirthdate="1/01/1999")', function(){
      let result = app.getPremium(5999.50,"1/01/1999");
      assert.equal(result.premiums.civil_liability, 1000);
    });
    // test 4a
    it('calculatePremium should return "omnium": 179.99 for (carValue="5999.50", driverBirthdate="1/01/1999")', function(){
      let result = app.getPremium(5999.50,"1/01/1999");
      assert.equal(result.premiums.omnium, 179.99);
    });
    // test 5
    it('calculatePremium should return "eligible": false if driver < 18 y.o. (carValue="5999.50", driverBirthdate="1/01/2010")', function(){
      let result = app.getPremium(5999.50,"1/01/2010");
      assert.equal(result.eligible, false);
    });
    // test 5a
    it('calculatePremium should return "premiums": null if driver < 18 y.o. (carValue="5999.50", driverBirthdate="1/11/2005")', function(){
      let result = app.getPremium(5999.50,"1/11/2005");
      assert.equal(result.premiums, null);
    });
    // test 6
    it('calculatePremium should return "eligible": true if driver > 18 y.o. (carValue="5999.50", driverBirthdate="1/11/2000")', function(){
      let result = app.getPremium(5999.50,"1/11/2000");
      assert.equal(result.eligible, true);
    });
  });

  describe('validParams() tests', function(){
    // test 1
    it('validParams should true if date is in a proper format ("30/06/1950")', function(){
      let result = app.validParams('');
      assert.isAbove(result, true);
    });
    // test 2
    it('validParams should return false when date is in wrong format ("12/30/1999")', function(){
      let result = app.validParams('');
      assert.typeOf(result, false);
    });
  });
});

