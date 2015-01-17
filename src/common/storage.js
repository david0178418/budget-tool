(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('storage', storage);

	function storage(localforage) {
		localforage.config({
		    name: 'Budget App',
		});

		return {
			get: function(key) {
				return localforage.getItem(key);
			},
			set: function(key, value) {
				return localforage.setItem(key, value);
			},
			delete: function(key) {
				return localforage.removeItem(key);
			},
		
		};
	}
})();