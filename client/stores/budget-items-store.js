import AppConstants from 'app-constants';
import BudgetItemActions from 'actions/budget-item-actions';
import extend from 'lodash/object/extend';
import flux from 'flux';

var dummyData = [
	{
		amount: 3000,
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
			removeItem: BudgetItemActions.budgetItemDeleted,
		});
	}

	addItem(newItem) {
		this.items.push(newItem);

		this.setState({
			items: this.items,
		});
	}

	removeItem(id) {
		// #TODO:0 for now, just use index+1 as id.  Will set proper id when persistence is set.
		this.items.splice(id - 1, 1);

		this.setState({
			items: this.items,
		});
	}
}

export default flux.createStore(BudgetItemsStore);
