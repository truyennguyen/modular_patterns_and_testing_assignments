'use strict';

var greetCLI = require('../greet2');
var expect = require('chai').expect;

describe('Greet', function(){
	it('should be able to greet from CLI', function()
	{
		expect(greetCLI(['one', 'two', 'Tom'])).to.eql('hello Tom');
	});
});