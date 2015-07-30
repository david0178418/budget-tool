//import classNames from 'classnames';
import React from 'react/addons';

import './calendar.scss';

export default
class Calendar extends React.Component {
	static get displayName() {
		return 'Calendar';
	}

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<span>Calendar Content</span>
		);
	}
}
