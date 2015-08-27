import AppConstants from 'app-constants';
//import classNames from 'classnames';
import React, {PropTypes} from 'react';

import './budget-items-management.scss';

import {
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

export default
class BudgetItemsManagement extends React.Component {
	static get displayName() {
		return 'BudgetItemsManagement';
	}

	static get propTypes() {
		return {
			budgetItems: PropTypes.array,
		};
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Budget Items Management</h3>
				<ListGroup>
					{this.props.budgetItems.map(function(budgetItem) {
						return (
							<ListGroupItem>
								<div>
									Name: {budgetItem.name}
								</div>
								<div>
									Amount: {budgetItem.amount}
								</div>
								<div>
									Start Date: {budgetItem.startDate}
								</div>
								<div>
									Type: {budgetItem.type === AppConstants.BUDGET_TYPE_INCOME ? 'Income' : 'Expense'}
								</div>
							</ListGroupItem>
						);
					})}
				</ListGroup>
			</div>
		);
	}
}
