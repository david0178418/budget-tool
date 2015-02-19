"use strict";
var React = require("react/addons");
var IncomeList = require("./components/income-list");
var ExpenseList = require("./components/expense-list");
var BudgetEntryForm = require("./components/budget-entry-form");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			expenses: [],
			income: [],
		};
	},
	render: function() {
		var income = this.state.income;
		var expenses = this.state.expenses;
		return (
			<div>
				<IncomeList income={income}></IncomeList>
				<ExpenseList expenses={expenses}></ExpenseList>
				<BudgetEntryForm  income={income} expenses={expenses}></BudgetEntryForm>
			</div>
		);
	},
});
