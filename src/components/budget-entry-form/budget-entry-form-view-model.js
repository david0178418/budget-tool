(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('BudgetEntryFormViewModel', BudgetEntryFormViewModel);

	function BudgetEntryFormViewModel(budgetFormService) {
		var vm = this;

		vm.save = function() {
			budgetFormService.closeForm();
			console.log('save!');
		};
	}

	BudgetEntryFormViewModel.prototype = {
	};
})();
