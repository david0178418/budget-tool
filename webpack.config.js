var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://0.0.0.0:3001',
		'./client/js/main',
	],
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				//exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, "client"),
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: [
			'', '.js', '.jsx'
		],
		modulesDirectories: [
			'client/js', 'node_modules'
		],
		alias: {
			'app-constants': '../../app-constants',
		}
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
};