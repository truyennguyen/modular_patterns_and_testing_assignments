'use strict';

var greet = require('./greet1');

var greetCLI = module.exports = function(args){
	return greet(args[2]);
};

console.log(greetCLI(process.argv));