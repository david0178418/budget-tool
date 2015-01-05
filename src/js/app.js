var App = angular.module('App', []);

App.controller('BudgetItemCtrl', function($scope) {
	$scope.world = "World!";
	$scope.collection = [
		1213, 24231, 323, 4624345,
	];
});