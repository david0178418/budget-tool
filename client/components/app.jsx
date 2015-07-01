'use strict';
var AltContainer = require('alt/AltContainer');
var BudgetItemsStore = require('stores/budget-items-store');
var BudgetItems = require('./components/budget-items');
//var classNames = require('classnames');
var flux = require('flux');
var React = require('react/addons');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<AltContainer
				flux={flux}
				stores={[BudgetItemsStore]}
				inject={{
					items: function() {
						return BudgetItemsStore.getState().items;
					},
				}}
			>
				<BudgetItems />
			</AltContainer>
		);
	}
}

module.exports = App;
