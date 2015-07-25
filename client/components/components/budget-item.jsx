//var classNames = require('classnames');
import React from 'react/addons';

class BugetItems extends React.Component {
	static displayName = 'BudgetItems';

	propTypes = {
		amount: React.PropTypes.number,
	};

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	onClick() {

	}

	render() {
		return (
			<button className="list-group-item" onClick={this.onClick}>
				${this.props.amount}
			</button>
		);
	}
}

export default BugetItems;
