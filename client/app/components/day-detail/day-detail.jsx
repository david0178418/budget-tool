//import classNames from 'classnames';
import React from 'react/addons';

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
		return (
			<ul className="day-detail list-group">
				<div className="list-group-item">
					<button className="detail-toggle btn btn-default btn-xs" type="button">
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
						<button className="detail-toggle btn btn-default btn-xs" type="button">
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
		);
	}
}
