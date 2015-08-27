//import classNames from 'classnames';
import React from 'react';

import './budget-items-management.scss';

export default
class BudgetItemsManagement extends React.Component {
	static get displayName() {
		return 'BudgetItemsManagement';
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<span>Budget Items Management</span>
		);
	}
}
