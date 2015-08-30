import AltContainer from 'alt/AltContainer';
import App from './app';
import BudgetItemActions from 'actions/budget-item-actions';
import BudgetItemsStore from 'stores/budget-items-store';
import flux from 'flux';
import React from 'react';

export default
class AppContainer extends React.Component {
	static get displayName() {
		return 'AppContainer';
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AltContainer
				actions={BudgetItemActions}
				flux={flux}
				inject={{
					budgetItems: function(props) {
						return BudgetItemsStore.getState().items;
					},
				}}
				stores={[
					BudgetItemsStore,
				]}
			>
				<App />
			</AltContainer>
		);
	}
}
