'use strict';
var AltContainer = require('alt/AltContainer');
var classNames = require('classnames');
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
			<AltContainer flux={flux}>
				<div>
					App initialized
				</div>
			</AltContainer>
		);
	}
}

module.exports = App;
