'use strict';

var expect = require('chai').expect;
var greet = require('../greet1');

describe('Greet', function() {

  it('should be able to greet someone', function() {
    expect(greet('Tom')).to.eql('hello Tome');
  });
});
