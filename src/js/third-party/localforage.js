(function() {
	"use strict";
	angular
		.module('third-party')
		.factory('localforage', localforage);

	function localforage($window) {
		return $window.localforage;
	}
})();