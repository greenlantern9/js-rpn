'use strict';

var assert = require('assert');

describe('Calculator', function() {
  describe('#calculate()', function() {
    var calculator = new Calculator();

    it('calculates the value of an expression in reverse polish notation (RPN)', function() {
      assert.equal(calculator.calculate("1 2 +"), 3);
    })

    it('supports multiple operators', function() {
      assert.equal(calculator.calculate("1 2 + 4 +"), 7);
    })

    it('supports *', function() {
      assert.equal(calculator.calculate("3 4 *"), 12);
    })

    it('supports mixed expressions', function() {
      assert.equal(calculator.calculate("2 3 * 10 +"), 16);
    })

    it('supports -', function() {
      assert.equal(calculator.calculate("5 3 -"), 2);
    })

    it('supports /', function() {
      assert.equal(calculator.calculate("42 6 /"), 7);
    })

    it('supports /', function() {
      assert.equal(calculator.calculate("42 6 /"), 7);
    })

    it('supports negative numbers and fractions', function() {
      assert.equal(calculator.calculate("-1 3.5 +"), 2.5);
    })

    it('supports max', function() {
      assert.equal(calculator.calculate("23 77 max"), 77);
      assert.equal(calculator.calculate("122 77 max"), 122);
    })

    it('supports abs', function() {
      assert.equal(calculator.calculate("-3 abs"), 3);
      assert.equal(calculator.calculate("3 abs"), 3);
    })

    it('supports pow', function() {
      assert.equal(calculator.calculate("2 3 pow"), 8);
    })

    it('can calculate the number of seconds in a year', function() {
      assert.equal(calculator.calculate("60 60 * 24 * 365 *"), 60 * 60 * 24 * 365);
    })
  })
})

