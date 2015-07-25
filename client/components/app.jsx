import AltContainer from 'alt/AltContainer';
//import classNames from 'classnames';
import flux from 'flux';
import React from 'react/addons';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<AltContainer flux={flux}>
				<div>
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
					<div className="Graph">

					</div>
					<div className="summary">
						<span className="total-income">
							$321
						</span>
						<span className="total-expense">
							$123
						</span>
						<span className="net-income">
							$213
						</span>
					</div>
					<button className="add-budget-item">Add Item</button>
					<ul className="budget-items">
						<li>
							<div className="budget-item">
								<button className="detail-toggle">v</button> $123 - Item 1 - Constant
							</div>
						</li>
						<li>
							<div className="budget-item expanded">
								<button className="detail-toggle expanded">^</button> $123 - Item 2 - Variable
								<div className="budget-item-detail">
									Started: 1/1/2015

								</div>
							</div>
						</li>
					</ul>
				</div>
			</AltContainer>
		);
	}
}

App.displayName = 'App';

export default App;
