/**
* Module dependencies
*/

//expect permite comparar valores de los test
var expect = require('chai').expect;
var converter = require('..');

describe('Temperature Conversor', function(){
	describe('Celsius to Farenheit conversion' , function(){
		it('Converts 100c to Fahrenheit',function(){
			var fh = converter.toFahrenheit(100);
			expect(fh).to.equal(212);
		});
	})
	describe('Farenheit to Celsius conversion' , function(){
		it('Fahrenheit 212c to Celsius',function(){
			var fh = converter.toCelsius(212);
			expect(fh).to.equal(100);
		});
	})
});