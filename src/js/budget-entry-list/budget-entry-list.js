(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('budgetEntryModelList', budgetEntryModelList);

	function budgetEntryModelList(_, storage, BudgetEntryModel) {
		var budgetEntries = [{
				label: 'test2',
			}, {
				label: 'test1',
		}];


		// storage.get('BudgetEntries').then(function(entries) {
		// 	_.each(entries, function(entry) {
		// 		budgetEntries.push(entry);
		// 	})
		// });
		
		return _.map(budgetEntries, function(budgetEntry) {
			return new BudgetEntryModel(budgetEntry);
		});
	}
})();