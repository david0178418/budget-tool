(function() {
	"use strict";
	angular
		.module('budgetApp')
		.controller('BudgetEntryFormViewModel', BudgetEntryFormViewModel);

	function BudgetEntryFormViewModel() {
		var vm = this;
	}

	BudgetEntryFormViewModel.prototype = {
		save: function() {
			console.log('save!');
		}
	};
})();
