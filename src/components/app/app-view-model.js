(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('AppViewModel', AppViewModel);

	function AppViewModel(dataservice) {
		var vm = this;

		vm.formOpen = false;

		dataservice.
			getBudgetItems().
			then(function(budgetEntries) {
				vm.budgetEntries = budgetEntries;
			});
	}

	AppViewModel.prototype = {
		openBudgetItemDialog: function() {
			this.formOpen = true;
		},
	};
})();
