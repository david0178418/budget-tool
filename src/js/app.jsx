"use strict"
var React = require("react/addons");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			world: "World",
		};
	},
	render: function() {
		return (
			<div>
				Hello {this.state.world}
			</div>
		);
	}
});
