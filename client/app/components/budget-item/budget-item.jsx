import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

import {
	Button,
	Glyphicon,
} from 'react-bootstrap';

import './budget-item.scss';

export default
class BudgetItem extends Component {
	static get displayName() {
		return 'BudgetItem';
	}

	static get propTypes() {
		return {
			amount: PropTypes.number,
			name: PropTypes.string,
			notes: PropTypes.string,
			started: PropTypes.string,
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			expanded: false,
		};
	}

	render() {
		return (
			<div className="list-group-item">
				<div className={classNames({
					'budget-item': true,
					expanded: this.state.expanded,
				})}>
					<Button bsSize="xsmall" className="detail-toggle" onClick={this.toggleExpand.bind(this)}>
						<Glyphicon glyph='align-justify' />
						<span className={classNames({
							glyphicon: true,
							'glyphicon-menu-up': this.state.expanded,
							'glyphicon-menu-down': !this.state.expanded,
						})}></span>
					</Button>
					<div>${this.props.amount} - {this.props.name} - Variable</div>
					<div className={classNames({
						'budget-item-detail': true,
						hidden: !this.state.expanded,
					})}>
						<div>
							Started: {this.props.started}
						</div>
						{this.renderNotes()}
					</div>
					<div className="buget-item-controls btn-group">
						<Button className="btn btn-default btn-xs">
							<span className="glyphicon glyphicon-pencil"></span>
						</Button>
						<Button className="btn btn-default btn-xs">
							<span className="glyphicon glyphicon-remove"></span>
						</Button>
					</div>
				</div>
			</div>
		);
	}

	renderNotes() {
		if(!this.props.notes) {
			return;
		}

		return (
			<div>
				Notes: {this.props.notes}
			</div>
		);
	}

	render

	toggleExpand() {
		this.setState({
			expanded: !this.state.expanded,
		});
	}
}
