'use strict';
import extend from 'lodash/object/extend';
import flux from 'flux';
import ApiUtils from 'api-utils';

class ServerActions {
	constructor() {
		this.generateActions();
	}
}

ServerActions.displayName = 'ServerActions';

extend(ServerActions.prototype, {
});

export default flux.createActions(ServerActions);
