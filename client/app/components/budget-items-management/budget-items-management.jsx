import BudgetItem from '../budget-item/budget-item';
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
			deleteAction: PropTypes.func,
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
							<ListGroupItem key={budgetItem.id}>
								<BudgetItem
									{...budgetItem}
									deleteAction={this.props.deleteAction}
								/>
							</ListGroupItem>
						);
					}, this)}
				</ListGroup>
			</div>
		);
	}
}
