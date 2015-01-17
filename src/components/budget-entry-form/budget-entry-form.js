(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('budgetEntryForm', budgetEntryForm);

	function budgetEntryForm() {
		return {
			controller: 'BudgetEntryFormViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/components/budget-entry-form/budget-entry-form.tpl.html',
			bindToController: true,
			scope: {
				budgetEntry: '=',
			},
		};
	}
})();
