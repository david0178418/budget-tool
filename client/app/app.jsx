import classNames from 'classnames';
import keyMirror from 'react/lib/keyMirror';
import React from 'react/addons';

import BudgetItemsManagement from './components/budget-items-management/budget-items-management';
import Calendar from './components/calendar/calendar';
import DateRangeDetail from './components/date-range-detail/date-range-detail';

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
					<button className="add-budget-item btn btn-default" type="button">
						<span className="glyphicon glyphicon-plus"></span> Create Budget Entry
					</button>
				</div>
				<div>
					<ul className="budget-detail-nav nav nav-pills nav-stacked">
						<li className={classNames({
							active: this.state.selectedTab === TABS.CALENDAR,
						})}>
							{/*
								Does this make sense here? If the view is to
								a fixed date renge, calendar view would be
								an odd-ball out.  Seems like it's a level up maybe?
							*/}
							<a href="#" onClick={this.onTabSelect.bind(this, TABS.CALENDAR)}>Calendar</a>
						</li>
						<li className={classNames({
							active: this.state.selectedTab === TABS.GRAPH,
						})}>
							<a href="#" onClick={this.onTabSelect.bind(this, TABS.GRAPH)}>Graph</a>
						</li>
						<li className={classNames({
							active: this.state.selectedTab === TABS.ITEMS,
						})}>
							<a href="#" onClick={this.onTabSelect.bind(this, TABS.ITEMS)}>Scheduled Budget Items</a>
						</li>
					</ul>
					<div className="budget-detail-tabs tab-content">
						<div className={classNames({
							active: this.state.selectedTab === TABS.CALENDAR,
							'tab-pane': true,
						})}>
							<Calendar />
						</div>
						<div className={classNames({
							active: this.state.selectedTab === TABS.GRAPH,
							'tab-pane': true,
						})}>
							<DateRangeDetail />
						</div>
						<div className={classNames({
							active: this.state.selectedTab === TABS.ITEMS,
							'tab-pane': true,
						})}>
							<BudgetItemsManagement />
						</div>
					</div>
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
