'use strict';

/* Directives */


angular.module('testApp.homeDirective', []).
	directive('appPhase', function(phase) {
		return function(scope, elm, attrs) {
			console.log("current app phase: " + phase);
		};
	});
