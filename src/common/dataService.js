(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('dataService', dataService);

	function dataService($q) {
		var firstLoad;

		return {
			loadSavedBudgetItems: loadSavedBudgetItems,
		};

		function loadSavedBudgetItems() {
			var data = [{
				label: 'test22',
			}, {
				label: 'test1',
			}];

			var fetch = $q.defer();
			setTimeout(function() {
				fetch.resolve(data);
			}, 2000);

			return fetch.promise;
		}
	}
})();
