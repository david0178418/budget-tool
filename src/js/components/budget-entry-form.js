"use strict";
var React = require("react/addons");

module.exports = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	render: function() {
		return (
			<section>
				<h3>Create Budget Entry</h3>
				Name: <input type="test"/><br/>
				Amount: <input type="number"/><br/>
				Notes: <input type="text"/><br/>
				Interval:
					<select>
						<option>One-time</option>
						<option>Daily</option>
						<option>Weekly</option>
						<option>Bi-weekly</option>
						<option>Monthly</option>
						<option>Bi-monthly</option>
					</select><br/>
				Start Date: <input type="date"/><br/>
			</section>
		);
	}
});