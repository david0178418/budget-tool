'use strict';
import AppConstants from 'app-constants';
import extend from 'lodash/object/extend';
import flux from 'flux';

var dummyData = [
	{
		name: 'Item 1',
		amount: 3000,
		interval: AppConstants.INTERVAL_WEEKLY,
		startDate: '6/1/2015',
		type: AppConstants.BUDGET_TYPE_EXPENSE,
	}, {
		name: 'Item 2',
		amount: 1000,
		interval: AppConstants.INTERVAL_BI_WEEKLY,
		startDate: '1/1/2015',
		type: AppConstants.BUDGET_TYPE_INCOME,
	}
];

class BudgetItemsStore {
	constructor() {
		extend(this, {
			items: dummyData,
		});

		this.bindListeners({
		});
	}

	addItem(newItem) {
		this.items.push(newItem);

		this.setState({
			items: this.items,
		});
	}

	removeItem(id) {
		// TODO for now, just use index+1 as id.  Will set proper id when persistence is set.
		this.items.splice(id-1, 1);

		this.setState({
			items: this.items,
		});
	}
}

BudgetItemsStore.displayName = 'BudgetItemsStore';

export default flux.createStore(BudgetItemsStore);
