"use strict";
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
				<section>
					<div>
						Total Monthly Income: $123
					</div>
					<ul>
						<li>
							Item1: $123 - Daily
							<div>Item 1 detail.</div>
						</li>
						<li>
							Item2: $123	- Weekly (Next 1/1/2020)
							<div>Item 2 detail.</div>
						</li>
					</ul>
				</section>
				<section>
					<div>
						Total Monthly Expenses: $123
					</div>
					<ul>
						<li>
							Item1: $123 - Daily
							<div>Item 3 detail.</div>
						</li>
						<li>
							Item2: $123	- Weekly (Next 1/1/2020)
							<div>Item 4 detail.</div>
						</li>
					</ul>
				</section>
				<section>
					<h3>Create Bedget Entry</h3>
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
			</div>
		);
	}
});
