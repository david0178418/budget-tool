import AppConstants from 'app-constants';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import { map } from 'lodash';

import {
	Button,
	Glyphicon,
} from 'react-bootstrap';

import './budget-event.scss';

export default
class BudgetEvent extends Component {
	static get displayName() {
		return 'BudgetEvent';
	}

	static get propTypes() {
		return {
			amount: PropTypes.number,
			exceptions: PropTypes.array,
			name: PropTypes.string,
			notes: PropTypes.string,
			started: PropTypes.string,
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
					'budget-event': true,
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
						'budget-event-detail': true,
						hidden: !this.state.expanded,
					})}>
						<div>
							Started: {this.props.started}
						</div>
						{this.renderExceptions()}
						{this.renderNotes()}
					</div>
					<div className="buget-event-controls btn-group">
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
					{this.props.exceptions.map(function(exception) {
						return (
							<li key={exception}>
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
