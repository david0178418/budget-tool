(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('BudgetEntryViewModel', BudgetEntryViewModel);

	function BudgetEntryViewModel($scope) {
		console.log(this, $scope);
		//this.budgetEntryModel = entry;
		// this.budgetEntryModel = budgetEntryModelFactory.create({
		// 	label: 'test',
		// });
	}

	BudgetEntryViewModel.prototype = {
	};
})();
