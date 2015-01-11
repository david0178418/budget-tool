(function() {
	angular
		.module('budgetApp')
		.directive('budgetEntryList', budgetEntries);

	function budgetEntries() {
		return {
			controller: 'BudgetEntriesViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/js/budget-entry-list/main.html',
			scope: {
				budgetEntryList: '=',
			},
		};
	}
})();