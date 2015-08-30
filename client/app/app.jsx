import keyMirror from 'react/lib/keyMirror';
import React, {PropTypes} from 'react';

import BudgetItemEdit from './components/budget-item-edit/budget-item-edit';
import BudgetItemsManagement from './components/budget-items-management/budget-items-management';
import Calendar from './components/calendar/calendar';
import DateRangeDetail from './components/date-range-detail/date-range-detail';

import {
	Button,
	Glyphicon,
	Modal,
	Nav,
	NavItem,
	TabbedArea,
	TabPane,
} from 'react-bootstrap';

import './app.scss';

var TABS = keyMirror({
	CALENDAR: null,
	GRAPH: null,
	ITEMS: null,
});

export default
class App extends React.Component {
	static get displayName() {
		return 'App';
	}

	static get propTypes() {
		return {
			budgetItems: PropTypes.array,
			deleteBudgetItem: PropTypes.func,
			createBudgetItem: PropTypes.func,
		};
	}

	constructor(props) {
		super(props);

		this.closeCreateModal = this.closeCreateModal.bind(this);
		this.openCreateModal = this.openCreateModal.bind(this);

		this.state = {
			createModalOpen: false,
			selectedTab: TABS.CALENDAR,
		};
	}

	render() {
		return (
			<div className="budget-management-tool">
				<div className="persistent">
					<Button className="add-budget-item" onClick={this.openCreateModal}>
						<Glyphicon glyph="plus"/> Create Budget Entry
					</Button>
					<Modal onHide={this.closeCreateModal} show={this.state.createModalOpen} >
						<Modal.Header closeButton>
							<Modal.Title>Budget Item Create</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<BudgetItemEdit />
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.props.createBudgetItem}>Save</Button>
							<Button onClick={this.closeCreateModal}>Close</Button>
						</Modal.Footer>
					</Modal>
				</div>
				<div>
					<Nav
						activeKey={this.state.selectedTab}
						bsStyle="pills"
						className="budget-detail-nav"
						onSelect={this.onTabSelect.bind(this)}
						stacked
					>
						<NavItem eventKey={TABS.CALENDAR}>
							Calendar
						</NavItem>
						<NavItem eventKey={TABS.GRAPH}>
							Graph
						</NavItem>
						<NavItem eventKey={TABS.ITEMS}>
							Scheduled Budget Items
						</NavItem>
					</Nav>
					<TabbedArea
						activeKey={this.state.selectedTab}
						className="budget-detail-tabs"
					>
						<TabPane eventKey={TABS.CALENDAR} >
							<Calendar />
						</TabPane>
						<TabPane eventKey={TABS.GRAPH} >
							<DateRangeDetail />
						</TabPane>
						<TabPane eventKey={TABS.ITEMS}>
							<BudgetItemsManagement
								budgetItems={this.props.budgetItems}
								deleteAction={this.props.deleteBudgetItem}
							/>
						</TabPane>
					</TabbedArea>
				</div>
			</div>
		);
	}

	closeCreateModal() {
		this.setState({
			createModalOpen: false,
		});
	}

	onTabSelect(tab) {
		this.setState({
			selectedTab: tab,
		});
	}

	openCreateModal() {
		this.setState({
			createModalOpen: true,
		});
	}
}
