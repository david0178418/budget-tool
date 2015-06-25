'use strict';
import $ from 'jquery';
import AppConstants from 'app-constants';
import map from 'lodash/collection/map';
import each from 'lodash/collection/each';

var delay = 1000;

export default {
	getPlatforms: function() {
		return $.getJSON('/platforms').then(function(data) {
			// TODO Why is this needed??
			return data;
		});
	},

	getPlatformsData: function(zoom, ids) {
		var xhr = $.Deferred();

		setTimeout(function() {
			xhr.resolve({
				series: platformsSeries,
				type: AppConstants.GRAPH_CATEGORY_PLATFORMS,
				zoom,
			});
		}, delay);

		return xhr;
	},

	getProjectData: function(zoom, ids) {
		return $.getJSON('/projects-history', {
			zoom,
			ids
		}).then(function(series) {
			each(series, function(singleSeries, id) {
				series[id] = map(singleSeries, function(point) {
					return {
						x: new Date(point.datetime),
						y: point.total,
					};
				});
			});
			return {
				series,
				type: AppConstants.GRAPH_CATEGORY_PROJECTS,
				zoom,
			};
		});
	},

	getPlatformsTopTen: function(date) {
		return $.getJSON('/platforms-top-ten', {
			date: date,
		}).then(function(data) {
			return data;
		});
	},
};

var startDate = require('moment')(new Date("11/23/2014"));
var dummyData = [
	{
		x: startDate.add(1, 'days').calendar(),
		y: 2,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 5,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 23,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 56,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 65,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 72,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 80,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 90,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 100,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 102,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 120,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 142,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 172,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 192,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 212,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 232,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 240,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 249,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 250,
	}, {
		x: startDate.add(1, 'days').calendar(),
		y: 255,
	},
];


//DUMMY DATA

var platformsSeries = {
	1: dummyDataMod(0, 0),
	2: dummyDataMod(1, 1),
	3: dummyDataMod(100, 0.5),
};

function dummyDataMod(offset, offsetMultiplier) {
	return dummyData.map(function(data) {
		return {
			y: data.y + offset * offsetMultiplier,
			x: new Date(data.x),
		};
	});
}