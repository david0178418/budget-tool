"use strict";
var React = require("react/addons");
var BudgetEntryListItem = require("./budget-entry.-list-item");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			data: [
				{
					name: "Item 1",
					amount: "111",
					interval: "Daily",
					details: "Item 1 details",
				}, {
					name: "Item 2",
					amount: "222",
					interval: "Daily",
					details: "Item 2 details",
				}, {
					name: "Item 3",
					amount: "333",
					interval: "Daily",
					details: "Item 3 details",
				},
			],
		};
	},
	render: function() {
		var listItems = this.state.data.map(function(budgetItem) {
			return (<BudgetEntryListItem {...budgetItem}></BudgetEntryListItem>);
		});
		return (
			<section>
				<div>
					Total Monthly Expenses: $123
				</div>
				<ul>
					{listItems}
				</ul>
			</section>
		);
	}
});
