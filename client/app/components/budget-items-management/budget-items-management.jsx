//import classNames from 'classnames';
import React from 'react/addons';

import './budget-items-management.scss';

export default
class BudgetItemsManagement extends React.Component {
	static get displayName() {
		return 'BudgetItemsManagement';
	}

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<span>Budget Items Management</span>
		);
	}
}
