'use strict';
var React = require('react/addons');
var BUDGET_TYPES = {
	EXPENSE: 'EXPENSE',
	INCOME: 'INCOME',
};

module.exports = React.createClass({
	setType: function(e) {
		this.setState({
			type: e.currentTarget.value,
		});
	},

	getInitialState: function() {
		return {
			type: BUDGET_TYPES.EXPENSE,
		};
	},
	render: function() {
		return (
			<section>
				<h3>Create Budget Entry</h3>
				Name: <input type="test"/><br/>
				Amount: <input type="number"/><br/>
				Notes: <input type="text"/><br/>
				Type:
					<label>
						<input
							type="radio"
							name="budget-entry-type"
							value={BUDGET_TYPES.INCOME}
							checked={this.state.type === BUDGET_TYPES.INCOME}
							onChange={this.setType}
						/>
						Income
					</label> 
					<label>
						<input
							type="radio"
							name="budget-entry-type"
							value={BUDGET_TYPES.EXPENSE}
							checked={this.state.type === BUDGET_TYPES.EXPENSE}
							onChange={this.setType}
						/>
						Expense
					</label><br/>
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
				<button type="button">Save</button>
			</section>
		);
	}
});