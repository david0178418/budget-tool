(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('AppViewModel', AppViewModel);

	function AppViewModel(dataService, budgetFormService) {
		var vm = this;

		vm.openBudgetItemDialog = function() {
			budgetFormService.openForm();
		};

		vm.formIsOpen = function() {
			return budgetFormService.formIsOpen();
		};

		dataService.
			getBudgetItems().
			then(function(budgetEntries) {
				vm.budgetEntries = budgetEntries;
			});
	}

	AppViewModel.prototype = {
	};
})();
