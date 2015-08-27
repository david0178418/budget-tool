import flux from 'flux';
//import ApiUtils from 'api-utils';

class AppActions {
	static displayName() {
		return 'AppActions';
	}

	constructor() {
		this.generateActions(
		);
	}
}

export default flux.createActions(AppActions);
