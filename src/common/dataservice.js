(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('dataservice', dataservice);

	function dataservice($q) {
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
