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

});


describe('Math', function() {
  // test 1
    it('should return 9 for 3*3', function(){
      assert.equal(3*3, 9);
  });
  // test2
    it('should return -8 for (3-4)*8', function(){
      assert.equal((3-4)*8, -8);
  });
});
