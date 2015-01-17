(function() {
	"use strict";
	angular
		.module('budgetApp')
		.directive('app', app);

	function app() {
		return {
			controller: 'AppViewModel',
			controllerAs: 'vm',
			templateUrl: 'src/components/app/app.tpl.html',
		};
	}
})();
