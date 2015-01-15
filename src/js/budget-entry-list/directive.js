(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('budgetEntryList', budgetEntryList);

	function budgetEntryList() {
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
