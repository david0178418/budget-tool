//import classNames from 'classnames';
import React from 'react';

import './budget-item-edit.scss';

export default
class BudgetItemEdit extends React.Component {
	static get displayName() {
		return 'BudgetItemEdit';
	}

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="budget-item-edit">
				Budget Item Create/Edit
			</div>
		);
	}
}
