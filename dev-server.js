'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

module.exports = {
	start: function(nodePort) {
		var devPort = nodePort + 1;
		new WebpackDevServer(webpack(config), {
			publicPath: config.output.publicPath,
			hot: true,
			historyApiFallback: true,
			headers: { 'Access-Control-Allow-Origin': '*' },
			proxy: {
				'*': 'http://localhost:'+nodePort,
			}
		}).listen(devPort, 'localhost', function (err, result) {
			if (err) {
				console.log(err);
			}

			console.log('Dev server started at localhost:'+devPort);
		});
	},
};