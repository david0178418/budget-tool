(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('budgetEntryListItem', budgetEntryListItem);

	function budgetEntryListItem() {
		return {
			controller: 'BudgetEntryViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/components/budget-entry-list/list-item/list-item.tpl.html',
			bindToController: true,
			scope: {
				budgetEntry: '=',
			},
		};
	}
})();
