import AltContainer from 'alt/AltContainer';
import classNames from 'classnames';
import flux from 'flux';
import React from 'react/addons';

import './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedTab: 'DAY',
		};
	}

	onTabSelect(tab) {
		this.setState({
			selectedTab: tab,
		});
	}

	render() {
		var dayTabClasses = classNames({
			active: this.state.selectedTab === 'DAY',
		});
		var graphTabClasses = classNames({
			active: this.state.selectedTab === 'GRAPH',
		});
		var calendarTabClasses = classNames({
			active: this.state.selectedTab === 'CALENDAR',
		});
		var dayTabPanelClasses = classNames({
			active: this.state.selectedTab === 'DAY',
			'tab-pane': true,
		});
		var graphTabPanelClasses = classNames({
			active: this.state.selectedTab === 'GRAPH',
			'tab-pane': true,
		});
		var calendarTabPanelClasses = classNames({
			active: this.state.selectedTab === 'CALENDAR',
			'tab-pane': true,
		});

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
							<li className={dayTabClasses}>
								<a href="#" onClick={this.onTabSelect.bind(this, 'DAY')}>Day</a>
							</li>
							<li className={graphTabClasses}>
								<a href="#" onClick={this.onTabSelect.bind(this, 'GRAPH')}>Graph</a>
							</li>
							<li className={calendarTabClasses}>
								{/*
									Does this make sense here? If the view is to
									a fixed date renge, calendar view would be
									an odd-ball out.  Seems like it's a level up maybe?
								*/}
								<a href="#" onClick={this.onTabSelect.bind(null, 'CALENDAR')}>Calendar(?)</a>
							</li>
						</ul>
						<div className="tab-content">
							<div className={dayTabPanelClasses}>
								<ul className="budget-items list-group">
									<div className="list-group-item">
										<div className="budget-item">
											$123 - Item 1 - Constant
											<span className="buget-item-controls btn-group">
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-pencil"></span>
												</button>
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-remove"></span>
												</button>
											</span>
											<button className="detail-toggle add-budget-item btn btn-default btn-xs" type="button">
												<span className="glyphicon glyphicon-menu-down"></span>
											</button>
										</div>
									</div>
									<div className="list-group-item">
										<div className="budget-item expanded">
											<button className="detail-toggle add-budget-item btn btn-default btn-xs" type="button">
												<span className="glyphicon glyphicon-menu-up"></span>
											</button>
											$123 - Item 2 - Variable
											<span className="buget-item-controls btn-group">
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-pencil"></span>
												</button>
												<button className="btn btn-default btn-xs">
													<span className="glyphicon glyphicon-remove"></span>
												</button>
											</span>
											<div className="budget-item-detail">
												Started: 1/1/2015
											</div>
										</div>
									</div>
								</ul>
							</div>
							<div className={graphTabPanelClasses}>
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
						</div>
					</div>
				</div>
			</AltContainer>
		);
	}
}

App.displayName = 'App';

export default App;
