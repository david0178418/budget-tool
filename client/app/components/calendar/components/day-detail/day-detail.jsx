import AppConstants from 'app-constants';
//import classNames from 'classnames';
import BudgetEvent from './components/budget-event/budget-event';
import React from 'react';

import './day-detail.scss';

export default
class DayDetail extends React.Component {
	static get displayName() {
		return 'DayDetail';
	}

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		var dummyEvent1 = {
			amount: 123,
			name: 'Pay Day',
			notes: 'A note for event 1',
			started: '1/1/2000',
			type: AppConstants.INTERVAL_WEEKLY,
			exceptions: [
				'1/1/2011',
				'2/2/20120',
			],
		};
		var dummyEvent2 = {
			amount: -321,
			name: 'Rent',
			notes: 'A note for event 2',
			started: '2/2/2002',
			type: AppConstants.INTERVAL_MONTHLY,
			exceptions: [
			],
		};
		return (
			<div className="day-detail list-group">
				<input type="date" />
				<BudgetEvent
					{...dummyEvent1}
				/>
				<BudgetEvent
					{...dummyEvent2}
				/>
			</div>
		);
	}
}
