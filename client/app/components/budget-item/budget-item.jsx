import AppConstants from 'app-constants';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import map from 'lodash/collection/map';

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
			exceptions: PropTypes.array,
			interval: PropTypes.string,
			name: PropTypes.string,
			notes: PropTypes.string,
			startDate: PropTypes.string,
			type: PropTypes.string,
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			expanded: true,
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
						<Glyphicon glyph={classNames({
							'menu-up': this.state.expanded,
							'menu-down': !this.state.expanded,
						})} />
					</Button>
					<div>
						{this.props.name} - ${this.props.amount} - {this.props.type}
					</div>
					<div className={classNames({
						'budget-item-detail': true,
						hidden: !this.state.expanded,
					})}>
						<div>
							Started: {this.props.startDate}
						</div>
						{this.renderExceptions()}
						{this.renderNotes()}
					</div>
					<div className="budget-item-controls btn-group">
						<Button bsSize="xsmall">
							<Glyphicon glyph="pencil" />
						</Button>
						<Button bsSize="xsmall">
							<Glyphicon glyph="remove" />
						</Button>
					</div>
				</div>
			</div>
		);
	}

	renderExceptions() {
		if(!this.props.exceptions.length) {
			return;
		}

		return (
			<div>
				Exceptions:
				<ul>
					{map(this.props.exceptions, function(exception) {
						return (
							<li>
								{exception} <Button bsStyle="link" className="">remove</Button>
							</li>
						);
					})}
				</ul>
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
