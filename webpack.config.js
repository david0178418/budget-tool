var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://0.0.0.0:3001',
		'./client/js/main',
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				//exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'client'),
			}, {
				test: /\.css$/,
				loader: "style!css",
			},{
				test: /\.scss$/,
				loader: 'style!css?sourceMap!sass?sourceMap',
			}, {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file',
			}, {
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff',
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
	devtools: [
		'sourcemap',
	],
	resolve: {
		extensions: [
			'', '.js', '.jsx'
		],
		modulesDirectories: [
			'client/js', 'node_modules'
		],
		alias: {
			'app-constants': path.join(__dirname, 'app-constants'),
		}
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},
};