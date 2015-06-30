'use strict';
//var classNames = require('classnames');
var React = require('react/addons');
var ReactBootstrap = require('react-bootstrap');

var Panel = ReactBootstrap.Panel;

class BugetItems extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<Panel header={this.props.name}>
				<div>
					${this.props.amount}
				</div>
			</Panel>
		);
	}
}

module.exports = BugetItems;