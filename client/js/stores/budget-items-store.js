'use strict';
import AppConstants from 'app-constants';
import extend from 'lodash/object/extend';
import flux from 'flux';

class BudgetItemStore {
	constructor() {
		extend(this, {
		});

		this.bindListeners({
		});
	}
}

BudgetItemStore.displayName = 'BudgetItemStore';

export default flux.createStore(BudgetItemStore);
