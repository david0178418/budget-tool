(function() {
	angular
		.module('budgetApp')
		.controller('BudgetEntriesViewModel', BudgetEntriesViewModel);

	function BudgetEntriesViewModel(budgetEntryModelList) {
		this.test = 'myval';
		this.budgetEntries = budgetEntryModelList;
	}
})();