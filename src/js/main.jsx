require('jquery')(function() {
	"use strict";
	var React = require("react");
	var App = require("./app.jsx");

	React.render(<App />, window.app);
});