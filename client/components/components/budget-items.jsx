'use strict';
//var classNames = require('classnames');
var BudgetItem = require('./budget-item');
var map = require('lodash/collection/map');
var React = require('react/addons');

class BugetItems extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div>
				{map(this.props.items, function(item) {
					return 	(
						<BudgetItem {...item} />
					);
				})}
			</div>
		);
	}
}

module.exports = BugetItems;