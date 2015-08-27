import flux from 'flux';

class BudgetItemActions {
	static displayName() {
		return 'BudgetItemActions';
	}
	constructor() {
		this.generateActions.apply(this, [
			'budgetItemCreated',
			'budgetItemDeleted',
			'budgetItemUpdated',
			'createBudgetItem',
			'deleteBudgetItem',
			'updateBudgetItem',
		]);
	}
}

export default flux.createActions(BudgetItemActions);
