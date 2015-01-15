(function() {
	"use strict";
	angular
		.module('budgetApp')
		.value('BudgetEntryModel', BudgetEntryModel);

	function BudgetEntryModel(props) {
		this.label = props.label + "1";
	}

	BudgetEntryModel.prototype = {
	};
})();