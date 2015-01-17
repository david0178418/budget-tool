(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('budgetEntryList', budgetEntryList);

	function budgetEntryList() {
		return {
			controller: 'BudgetEntriesViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/components/budget-entry-list/budget-entry-list.tpl.html',
			bindToController: true,
			scope: {
				budgetEntries: '=',
			},
		};
	}
})();
