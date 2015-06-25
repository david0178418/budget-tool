'use strict';
import appActions from 'actions/app-actions';
import AppConstants from 'app-constants';
import extend from 'lodash/object/extend';
import flux from 'flux';
import serverActions from 'actions/server-actions';

class AppStore {
	constructor() {
		extend(this, {
		});

		this.bindListeners({
		});
	}
}

AppStore.displayName = 'AppStore';

export default flux.createStore(AppStore);
