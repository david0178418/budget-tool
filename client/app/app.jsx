import keyMirror from 'react/lib/keyMirror';
import React from 'react';

import BudgetItemsManagement from './components/budget-items-management/budget-items-management';
import Calendar from './components/calendar/calendar';
import DateRangeDetail from './components/date-range-detail/date-range-detail';

import {
	Button,
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

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: TABS.CALENDAR,
		};
	}

	render() {
		return (
			<div className="budget-management-tool">
				<div className="persistent">
					<Button className="add-budget-item">
						<span className="glyphicon glyphicon-plus"></span> Create Budget Entry
					</Button>
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
							<BudgetItemsManagement />
						</TabPane>
					</TabbedArea>
				</div>
			</div>
		);
	}

	onTabSelect(tab) {
		this.setState({
			selectedTab: tab,
		});
	}
}
