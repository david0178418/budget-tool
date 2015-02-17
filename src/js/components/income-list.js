"use strict";
var React = require("react/addons");
var BudgetEntryListItem = require("./budget-entry.-list-item");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			data: [
				{
					name: "Item 4",
					amount: "444",
					interval: "Daily",
					details: "Item 4 details",
				}, {
					name: "Item 5",
					amount: "555",
					interval: "Daily",
					details: "Item 5 details",
				}, {
					name: "Item 6",
					amount: "666",
					interval: "Daily",
					details: "Item 6 details",
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
					Total Monthly Income: $123
				</div>
				<ul>
					{listItems}
				</ul>
			</section>
		);
	}
});
