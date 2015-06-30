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
var minExt = prod ? '.min': '';
var scriptHash;
var jsFile = 'bundle'+minExt+'.js';
var styleFile = 'styles'+minExt+'.css';
var styleHash;

console.log("Server production mode: ", prod);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('build'));
app.use(express.static('node_modules/font-awesome'));

fs.readFile('build/'+jsFile, function(err, buf) {
	scriptHash = md5(buf);
});

fs.readFile('build/'+styleFile, function(err, buf) {
	styleHash = md5(buf);
});

app.get('/', function (req, res) {
	res.render('index', {
		minExt: minExt,
		scriptHash: scriptHash,
		styleHash: styleHash,
	});
});

var server = app.listen(port, function () {
	var port = server.address().port;
	
	console.log("Server started at http://localhost:"+port);
});

if(!prod) {console.log(2);
	require('./dev-server').start(port);
}