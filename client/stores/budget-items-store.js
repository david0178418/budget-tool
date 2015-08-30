import AppConstants from 'app-constants';
import BudgetItemActions from 'actions/budget-item-actions';
import extend from 'lodash/object/extend';
import flux from 'flux';
import reject from 'lodash/collection/reject';

var dummyData = [
	{
		amount: 3000,
		id: 1,
		interval: AppConstants.INTERVAL_WEEKLY,
		name: 'Item 1',
		notes: 'Note for item 2',
		startDate: '6/1/2015',
		type: AppConstants.BUDGET_TYPE_EXPENSE,
		exceptions: [
			'1/2/2016',
		],
	}, {
		amount: 1000,
		id: 2,
		interval: AppConstants.INTERVAL_BI_WEEKLY,
		name: 'Item 2',
		notes: 'Note for item 2',
		startDate: '1/1/2015',
		type: AppConstants.BUDGET_TYPE_INCOME,
		exceptions: [
			'1/2/2016',
			'3/2/2015',
		],
	},
];

class BudgetItemsStore {
	static get displayName() {
		return 'BudgetItemsStore';
	}

	constructor() {
		extend(this, {
			items: dummyData,
		});

		this.bindListeners({
			addItem: BudgetItemActions.budgetItemCreated,
			removeItem: BudgetItemActions.deleteBudgetItem,
		});
	}

	addItem(newItem) {
		this.items.push(newItem);

		this.setState({
			items: this.items,
		});
	}

	removeItem(data) {
		// TODO: Figure out why an array comes through rather than just the data that is bound.
		var id = data[0];
		debugger;
		// #TODO:0 for now, just use index+1 as id.  Will set proper id when persistence is set.
		var items = reject(this.items, function(item) {
			return item.id === id;
		});

		this.setState({
			items,
		});
	}
}

export default flux.createStore(BudgetItemsStore);
