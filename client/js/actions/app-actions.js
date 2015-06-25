import flux from 'flux';
import extend from 'lodash/object/extend';
import ApiUtils from 'api-utils';

class AppActions {
	constructor() {
		this.generateActions(
		);
	}
}

extend(AppActions.prototype, {
});

AppActions.displayName = 'AppActions';

export default flux.createActions(AppActions);
