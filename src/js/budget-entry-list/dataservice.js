(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('dataservice', dataservice);

	function dataservice($q) {
		return {
			getData: getData,
		};

		function getData() {
			var data = [{
				label: 'test2',
			}, {
				label: 'test1',
			}];

			var fetch = $q.defer();
			fetch.resolve(data);

			return fetch.promise;
		}
	}
})();
