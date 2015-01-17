(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('dataService', dataService);

	function dataService($q) {
		return {
			getBudgetItems: getBudgetItems,
		};

		function getBudgetItems() {
			var data = [{
				label: 'test22',
			}, {
				label: 'test1',
			}];

			var fetch = $q.defer();
			fetch.resolve(data);

			return fetch.promise;
		}
	}
})();
