'use strict';
var React = require('react');
var App = require('./components/app');

require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('../sass/main.scss');

React.render(<App />, window.app);