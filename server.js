'use strict';
var AppConstants = require('./app-constants');
var argv = require('yargs')
	.boolean('prod')
	.argv;
var express = require('express');
var exphbs  = require('express-handlebars');
var fs = require('fs');
var md5 = require('MD5');

var app = express();
var port = 3000;
var prod = argv.prod;
var scriptHash;
var jsFile = 'bundle'+(prod ? '.min': '')+'.js';
var styleHash;

console.log("Server production mode: ", prod);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('build'));
app.use(express.static('node_modules/font-awesome'));

fs.readFile('build/'+jsFile, function(err, buf) {
	scriptHash = md5(buf);
});

fs.readFile('build/styles.css', function(err, buf) {
	styleHash = md5(buf);
});

app.get('/', function (req, res) {
	res.render('index', {
		jsFile: jsFile,
		scriptHash: scriptHash,
		styleHash: styleHash,
	});
});

var server = app.listen(port, function () {
	var port = server.address().port;
	
	console.log("Server started at http://localhost:"+port);
});

if(!prod) {
	require('./dev-server').start(port);
}