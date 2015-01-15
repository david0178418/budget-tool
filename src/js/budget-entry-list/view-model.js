(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('BudgetEntriesViewModel', BudgetEntriesViewModel);

	function BudgetEntriesViewModel(dataservice) {
		var vm = this;
		
		dataservice.getData().then(function(data) {
			vm.budgetEntries = data;
		});
	}
})();
