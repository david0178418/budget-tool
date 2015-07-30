import AltContainer from 'alt/AltContainer';
import App from './app';
import flux from 'flux';
import React from 'react/addons';


export default
class AppContainer extends React.Component {
	static get displayName() {
		return 'AppContainer';
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AltContainer flux={flux}>
				<App />
			</AltContainer>
		);
	}
}
