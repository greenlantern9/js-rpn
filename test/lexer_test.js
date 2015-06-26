'use strict';

var assert = require('assert');

function Lexer(input) {
  this.next = function() { return true; };
  this.token = function() { return 0; };
}

describe('Lexer', function() {
  describe('#token()', function() {
    it('returns the current token', function() {
      var lexer = new Lexer('1');
      assert.equal(lexer.token(), 1);
    })

    it('can be called repeatedly, returning the same token', function() {
      var lexer = new Lexer('1');
      assert.equal(lexer.token(), 1);
      assert.equal(lexer.token(), 1);
      assert.equal(lexer.token(), 1);
    })
  })

  describe('#next()', function() {
    it('returns true if there are more tokens to read', function() {
      var lexer = new Lexer('1');
      assert.equal(lexer.next(), true);
    })

    it('returns false once end of file is reached', function() {
      var lexer = new Lexer('1');
      lexer.next()
      assert.equal(lexer.next(), false);
    })

    it('advances "#token()" to the next token', function() {
      var lexer = new Lexer('1 2 3');
      assert.equal(lexer.token(), 1);
      assert.equal(lexer.next(), true);
      assert.equal(lexer.token(), 2);
      assert.equal(lexer.next(), true);
      assert.equal(lexer.token(), 3);
      assert.equal(lexer.next(), false);
    })

    it('accepts numbers', function() {
      var lexer = new Lexer('12345');
      assert.equal(lexer.token(), 12345);
    })

    it('accepts negative numbers', function() {
      var lexer = new Lexer('12345');
      assert.equal(lexer.token(), 12345);
    })

    it('accepts fractional numbers', function() {
      var lexer = new Lexer('123.45');
      assert.equal(lexer.token(), 123.45);
    })

    it('accepts mathematical operators', function() {
      var lexer = new Lexer('+ - / *');
      assert.equal(lexer.token(), '+');
      lexer.next();
      assert.equal(lexer.token(), '-');
      lexer.next();
      assert.equal(lexer.token(), '/');
      lexer.next();
      assert.equal(lexer.token(), '*');
    })

    it('accepts function names', function() {
      var lexer = new Lexer('max abs pow');
      assert.equal(lexer.token(), 'max');
      lexer.next();
      assert.equal(lexer.token(), 'abs');
      lexer.next();
      assert.equal(lexer.token(), 'pow');
    })
  })
})


