import DayDetail from './components/day-detail/day-detail';
import keyMirror from 'react/lib/keyMirror';
import React from 'react';

import {
	TabbedArea,
	TabPane,
} from 'react-bootstrap';

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
			<TabbedArea activeKey={this.state.selectedTab} onSelect={this.onTabSelect.bind(this)}>
				<TabPane eventKey={TABS.DAY} tab="Day">
					<DayDetail />
				</TabPane>
				<TabPane eventKey={TABS.MONTH} tab="Month">
					Month
				</TabPane>
			</TabbedArea>
			</div>
		);
	}

	onTabSelect(tab) {
		this.setState({
			selectedTab: tab,
		});
	}
}
