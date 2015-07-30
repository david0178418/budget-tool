//import classNames from 'classnames';
import React from 'react/addons';

import './date-range-detail.scss';

export default
class DateRangeDetail extends React.Component {
	static get displayName() {
		return 'DateRangeDetail';
	}

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div className="date-range-detail">
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
		);
	}
}
