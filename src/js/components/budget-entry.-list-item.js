"use strict";
var React = require("react/addons");

module.exports = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	render: function() {
		return (
			<li>
				{this.props.name}: ${this.props.amount} - {this.props.interval}
				<div>{this.props.details}</div>
			</li>
		);
	}
});
