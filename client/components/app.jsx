import AltContainer from 'alt/AltContainer';
import classNames from 'classnames';
import flux from 'flux';
import keyMirror from 'react/lib/keyMirror';
import React from 'react/addons';

import './app.scss';

var TABS = keyMirror({
	CALENDAR: null,
	DAY: null,
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
			selectedTab: TABS.DAY,
		};
	}

	render() {
		return (
			<AltContainer flux={flux}>
				<div>
					<div className="persistent">
						<button className="add-budget-item btn btn-default" type="button">
							<span className="glyphicon glyphicon-plus"></span> Create Budget Entry
						</button>
					</div>
					<div className="budget-detail">
						<ul className="nav nav-tabs">
							<li className={classNames({
								active: this.state.selectedTab === TABS.DAY,
							})}>
								<a href="#" onClick={this.onTabSelect.bind(this, TABS.DAY)}>Day</a>
							</li>
							<li className={classNames({
								active: this.state.selectedTab === TABS.GRAPH,
							})}>
								<a href="#" onClick={this.onTabSelect.bind(this, TABS.GRAPH)}>Graph</a>
							</li>
							<li className={classNames({
								active: this.state.selectedTab === TABS.CALENDAR,
							})}>
								{/*
									Does this make sense here? If the view is to
									a fixed date renge, calendar view would be
									an odd-ball out.  Seems like it's a level up maybe?
								*/}
								<a href="#" onClick={this.onTabSelect.bind(this, TABS.CALENDAR)}>Calendar(?)</a>
							</li>
							<li className={classNames({
								active: this.state.selectedTab === TABS.CALENDAR,
							})}>
								<a href="#" onClick={this.onTabSelect.bind(this, TABS.ITEMS)}>Budget Items</a>
							</li>
						</ul>
						<div className="budget-detail-tabs tab-content">
							<div className={classNames({
								active: this.state.selectedTab === TABS.DAY,
								'tab-pane': true,
							})}>
								<ul className="budget-items list-group">
									<div className="list-group-item">
										<button className="detail-toggle add-budget-item btn btn-default btn-xs" type="button">
											<span className="glyphicon glyphicon-menu-down"></span>
										</button>
										<div className="budget-item">
											$123 - Item 1 - Constant
										</div>
										<span className="buget-item-controls btn-group">
											<button className="btn btn-default btn-xs">
												<span className="glyphicon glyphicon-pencil"></span>
											</button>
											<button className="btn btn-default btn-xs">
												<span className="glyphicon glyphicon-remove"></span>
											</button>
										</span>
									</div>
									<div className="list-group-item">
										<div className="budget-item expanded">
											<button className="detail-toggle add-budget-item btn btn-default btn-xs" type="button">
												<span className="glyphicon glyphicon-menu-up"></span>
											</button>
											$123 - Item 2 - Variable
											<div className="budget-item-detail">
												Started: 1/1/2015
											</div>
											<span className="buget-item-controls btn-group">
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-pencil"></span>
												</button>
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-remove"></span>
												</button>
											</span>
										</div>
									</div>
								</ul>
							</div>
							<div className={classNames({
								active: this.state.selectedTab === TABS.GRAPH,
								'tab-pane': true,
							})}>
								<div className="toolbar">
									<div className="date-range-control">
										<select className="preset-interval">
											<option>
												Day
											</option>
											<option>
												Week
											</option>
											<option>
												Two Weeks
											</option>
											<option>
												Month
											</option>
											<option>
												3 Months
											</option>
											<option>
												6 months
											</option>
											<option>
												Year
											</option>
										</select>
									</div>
								</div>
								<div className="budget-range-summary">
									<span className="total-income summary-item">
										Income: <span className="summary-value">$321</span>
									</span>
									<span className="total-expense summary-item">
										Expenses: <span className="summary-value">$123</span>
									</span>
									<span className="net summary-item">
										Net: <span className="summary-value">$213</span>
									</span>
								</div>
							</div>
							<div className={classNames({
								active: this.state.selectedTab === TABS.CALENDAR,
								'tab-pane': true,
							})}>
								Calendar
							</div>
							<div className={classNames({
								active: this.state.selectedTab === TABS.ITEMS,
								'tab-pane': true,
							})}>
								Full items list
							</div>
						</div>
					</div>
				</div>
			</AltContainer>
		);
	}

	onTabSelect(tab) {
		this.setState({
			selectedTab: tab,
		});
	}
}
