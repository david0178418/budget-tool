(function() {
	"use strict";
	angular
		.module('third-party')
		.factory('_', lodash);

	function lodash($window) {
		return $window._.noConflict();
	}
})();