(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('AppViewModel', AppViewModel);

	function AppViewModel(budgetEntriesData, budgetFormService) {
		var vm = this;

		vm.budgetEntries = budgetEntriesData;


		vm.openBudgetItemDialog = function() {
			budgetFormService.openForm();
		};

		vm.formIsOpen = function() {
			return budgetFormService.formIsOpen();
		};
	}

	AppViewModel.prototype = {
	};
})();
