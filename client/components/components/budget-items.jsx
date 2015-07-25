//var classNames = require('classnames');
import BudgetItem from './budget-item';
import map from 'lodash/collection/map';
import React from 'react/addons';

class BugetItems extends React.Component {
	static displayName = 'BudgetItem'

	propTypes = {
		items: React.propTypes.object,
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list-group">
				{map(this.props.items, function(item) {
					return 	(
						<BudgetItem {...item} />
					);
				})}
			</div>
		);
	}
}

export default BugetItems;
