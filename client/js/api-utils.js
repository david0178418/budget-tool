'use strict';
import AppConstants from 'app-constants';
import Api from 'api';

var utils = {
	getPlatforms: function() {
		return Api.getPlatforms();
	},

	getPlatformsTopTen: function(date) {
		return Api.getPlatformsTopTen(date);
	},

	getSeriesData: function(params) {
		var xhr;
		var apiCall;

		if(params.type === AppConstants.GRAPH_CATEGORY_PLATFORMS) {
			apiCall = Api.getPlatformsData;
		} else {
			apiCall = Api.getProjectData;
		}

		xhr = apiCall(params.zoom, params.ids);

		return xhr;
	},
};

export default utils;