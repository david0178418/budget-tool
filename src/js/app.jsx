"use strict";
var React = require("react/addons");
var IncomeList = require("./components/income-list");
var ExpenseList = require("./components/expense-list");
var BudgetEntryForm = require("./components/budget-entry-form");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			world: "World",
		};
	},
	render: function() {
		return (
			<div>
				<IncomeList></IncomeList>
				<ExpenseList></ExpenseList>
				<BudgetEntryForm></BudgetEntryForm>
			</div>
		);
	}
});
