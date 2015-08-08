import classNames from 'classnames';
import DayDetail from './components/day-detail/day-detail';
import keyMirror from 'react/lib/keyMirror';
import React from 'react/addons';

import './calendar.scss';

var TABS = keyMirror({
	DAY: null,
	MONTH: null,
});

export default
class Calendar extends React.Component {
	static get displayName() {
		return 'Calendar';
	}

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: TABS.DAY,
		};
	}

	render() {
		return (
			<div>
				<ul className="nav nav-tabs">
					<li className={classNames({
						active: this.state.selectedTab === TABS.DAY,
					})}>
						<a href="#" onClick={this.onTabSelect.bind(this, TABS.DAY)}>Day</a>
					</li>
					<li className={classNames({
						active: this.state.selectedTab === TABS.MONTH,
					})}>
						<a href="#" onClick={this.onTabSelect.bind(this, TABS.MONTH)}>MONTH</a>
					</li>
				</ul>
				<div className="tab-content">
					<div className={classNames({
						active: this.state.selectedTab === TABS.DAY,
						'tab-pane': true,
					})}>
						<DayDetail />
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
