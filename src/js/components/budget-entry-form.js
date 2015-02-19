'use strict';
var React = require('react/addons');
var BUDGET_TYPE = {
	EXPENSE: 'EXPENSE',
	INCOME: 'INCOME',
};
var INTERVAL = {
	ONE_TIME:"1",
	DAILY: "2",
	WEEKLY: "3",
	BI_WEEKLY: "4",
	MONTHLY: "5",
	CUSTOM: "6",
};

module.exports = React.createClass({
	newBudgetEntry: function() {
		return {
			amount: '0',
			interval: BUDGET_TYPE.ONE_TIME,
			name: '',
			notes: '',
			type: BUDGET_TYPE.EXPENSE,
			customInterval: 0,
		};
	},

	setType: function(e) {
		this.setState({
			type: e.currentTarget.value,
		});
	},

	setInterval: function(e) {
		this.setState({
			interval: e.currentTarget.value,
		});
	},

	getInitialState: function() {
		window.x = this;
		return this.newBudgetEntry();
	},

	render: function() {
		var customIntervalField;

			console.log(this.state.interval, INTERVAL.CUSTOM, this.state.interval === INTERVAL.CUSTOM);
		if(this.state.interval === INTERVAL.CUSTOM) {
			console.log(this.state.interval === INTERVAL.CUSTOM);
			customIntervalField = (<div><input name="custom-days" type="number" value={this.state.customInterval}/> Days</div>)
		}
		return (
			<section>
				<h3>Create Budget Entry</h3>
				Name: <input type="text" placeholder="Enter label name" value={this.state.name}/><br/>
				Amount: <input type="number" value={this.state.amount}/><br/>
				Notes: <input type="text" placeholder="Enter budget entry notes" value={this.state.notes}/><br/>
				Type:
					<label>
						<input
							type="radio"
							name="budget-entry-type"
							value={BUDGET_TYPE.INCOME}
							checked={this.state.type === BUDGET_TYPE.INCOME}
							onChange={this.setType}
						/>
						Income
					</label> 
					<label>
						<input
							type="radio"
							name="budget-entry-type"
							value={BUDGET_TYPE.EXPENSE}
							checked={this.state.type === BUDGET_TYPE.EXPENSE}
							onChange={this.setType}
						/>
						Expense
					</label><br/>
				Interval:
					<select onChange={this.setInterval}>
						<option value={INTERVAL.ONE_TIME} selected={this.state.interval === INTERVAL.ONE_TIME}>One-time</option>
						<option value={INTERVAL.DAILY} selected={this.state.interval === INTERVAL.DAILY}>Daily</option>
						<option value={INTERVAL.WEEKLY} selected={this.state.interval === INTERVAL.WEEKLY}>Weekly</option>
						<option value={INTERVAL.BI_WEEKLY} selected={this.state.interval === INTERVAL.BI_WEEKLY}>Bi-weekly</option>
						<option value={INTERVAL.MONTHLY} selected={this.state.interval === INTERVAL.MONTHLY}>Monthly</option>
						<option value={INTERVAL.CUSTOM} selected={this.state.interval === INTERVAL.CUSTOM}>Custom</option>
					</select><br/>
				{customIntervalField}
				Start Date: <input type="date"/><br/>
				<button type="button">Save</button>
			</section>
		);
	}
});