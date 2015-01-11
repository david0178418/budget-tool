 (function() {
	angular
		.module('budgetApp')
		.directive('budgetEntryListItem', budgetEntryListItem);
	
	function budgetEntryListItem() {
		return {
			controller: 'BudgetEntryViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/js/budget-entry-list-item/main.html',
			scope: {
				budgetEntry: '=',
			},
		};
	}
})();