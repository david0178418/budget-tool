var path = require('path');
var appRoot = '..';
var argv = require('yargs')
	.boolean('prod')
	.argv;
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');
var md5 = require('MD5');

var app = express();
var port = 3000;
var prod = argv.prod;
var minExt = prod ? '.min' : '';
var scriptHash;
var jsFile = 'bundle' + minExt + '.js';
var styleHash;

console.log('Server production mode: ', prod);

app.engine('handlebars', exphbs());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(appRoot, 'build')));
app.use(express.static(path.join(appRoot, 'node_modules/font-awesome')));

try {
	fs.readFile(path.join(appRoot, 'build', jsFile), function(err, buf) {
		if(err) {
			//handle error
		}
		scriptHash = md5(buf);
	});
} catch(e) {
	//hanlde
}

if(prod) {
	fs.readFile(path.join(appRoot, 'build/style.min.css'), function(err, buf) {
		if(err) {
			//
		}
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
	console.log('Server started at http://localhost:' + server.address().port);
});

if(!prod) {
	require('./dev-server').start(port);
}
