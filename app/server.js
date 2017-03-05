/**
* Module dependencies
*/

var express = require('express');
var converter = require('..');

var app = express();


app.get('/toCelsius',function(req,res){
	var temperature = req.query.temperature;
	res.send(200, converter.toCelsius(temperature));
})

app.get('/toFahrenheit',function(req,res){
	var temperature = req.query.temperature;
	res.send(200, converter.toFahrenheit(temperature));
})

app.listen(3000,function(err){
  if(err) console.log('Hubo un error'), process.exit(1);
  console.log('escuchando en el puerto 3000');
})