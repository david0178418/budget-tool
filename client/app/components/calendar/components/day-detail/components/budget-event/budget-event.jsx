import AppConstants from 'app-constants';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import {map} from 'lodash';

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
					<button className="detail-toggle btn btn-default btn-xs" onClick={this.toggleExpand.bind(this)} type="button">
						<span className={classNames({
							glyphicon: true,
							'glyphicon-menu-up': this.state.expanded,
							'glyphicon-menu-down': !this.state.expanded,
						})}></span>
					</button>
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
						<button className="btn btn-default btn-xs">
							<span className="glyphicon glyphicon-pencil"></span>
						</button>
						<button className="btn btn-default btn-xs">
							<span className="glyphicon glyphicon-remove"></span>
						</button>
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
								{exception} <button className="btn btn-default btn-link">remove</button>
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
