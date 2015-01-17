(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('AppViewModel', AppViewModel);

	function AppViewModel(dataservice) {
		var vm = this;

		dataservice.
			getBudgetItems().
			then(function(budgetEntries) {
				vm.budgetEntries = budgetEntries;
			});
	}
})();
