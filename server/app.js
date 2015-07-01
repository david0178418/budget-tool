'use strict';
var appRoot = '../';
var AppConstants = require(appRoot+'app-constants');
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
var styleHash;

console.log("Server production mode: ", prod);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(appRoot+'build'));
app.use(express.static(appRoot+'node_modules/font-awesome'));

fs.readFile(appRoot+'build/'+jsFile, function(err, buf) {
	scriptHash = md5(buf);
});

if(prod) {
	fs.readFile(appRoot+'build/style.min.css', function(err, buf) {
		styleHash = md5(buf);
	});
}

app.get('/', function (req, res) {
	res.render('index', {
		minExt: minExt,
		prod: prod,
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
