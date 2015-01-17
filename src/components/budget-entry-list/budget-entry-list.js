(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('budgetEntryList', budgetEntryList);

	function budgetEntryList() {
		console.log(1);
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
