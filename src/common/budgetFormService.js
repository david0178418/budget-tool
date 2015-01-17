(function() {
	"use strict";
	angular
		.module('budgetApp')
		.factory('budgetFormService', budgetFormService);

	// Shot in the dark trying to figure out a clean way to handle
	// inter-component communication.  At the moment, only one modal
	// can be open at time which is clearly an issue
	function budgetFormService($q) {
		var formOpen = false;
		var service = {};

		return {
			closeForm: closeForm,
			formIsOpen: formIsOpen,
			openForm: openForm,
		};

		function closeForm() {
			formOpen = false;
		}

		function formIsOpen() {
			return formOpen;
		}

		function openForm() {
			formOpen = true;
		}
	}
})();
