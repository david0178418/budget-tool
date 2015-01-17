(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('budgetEntriesData', budgetEntriesData);

	function budgetEntriesData(_, dataService) {
		var budgetEntries = [];

		dataService.
			loadSavedBudgetItems().
			then(function(data) {
				budgetEntries.splice(0);

				_.each(data, function(budgetItem) {
					budgetEntries.push(budgetItem);
				});
			});

		return budgetEntries;
	}
})();
