'use strict';

var assert = require('assert');

describe('Stack', function() {
  describe('#push()', function() {
    it('pushes a the given value to the stack', function() {
      var stack = new Stack();
      stack.push(123);
      stack.push(456);
      stack.push(789);
      assert.equal(stack.toString(), "123 456 789");
    })
  })

  describe('#pop()', function() {
    it('removes an element from the top of the stack and returns it', function() {
      var stack = new Stack();
      stack.push(123);
      stack.push(456);
      stack.push(789);
      assert.equal(stack.pop(), 789);
      assert.equal(stack.toString(), "123 456");
    })
  })

  describe('#peek()', function() {
    it('returns the element at the top of the stack, but doesnt modify it', function() {
      var stack = new Stack();
      stack.push(123);
      stack.push(456);
      stack.push(789);
      assert.equal(stack.peek(), 789);
      assert.equal(stack.toString(), "123 456 789");
    })
  })
})

