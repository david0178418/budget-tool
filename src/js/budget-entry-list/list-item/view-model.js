(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('BudgetEntryViewModel', BudgetEntryViewModel);

	function BudgetEntryViewModel($scope) {
		//this.budgetEntryModel = entry;
		// this.budgetEntryModel = budgetEntryModelFactory.create({
		// 	label: 'test',
		// });
		debugger;
	}

	BudgetEntryViewModel.prototype = {
		get label() {
			return this.budgetEntryModel.label;
		},

		set label(value) {
			this.budgetEntryModel.label = value;
		}
	};
})();
