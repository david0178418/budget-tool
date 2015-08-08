import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

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
					<button className="detail-toggle btn btn-default btn-xs" onClick={this.toggleExpand.bind(this)} type="button">
						<span className={classNames({
							glyphicon: true,
							'glyphicon-menu-up': this.state.expanded,
							'glyphicon-menu-down': !this.state.expanded,
						})}></span>
					</button>
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
