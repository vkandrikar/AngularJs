'use strict';

/*var app = angular.module("testApp.participateController", ["participateController"]).controller('ParticipateController', 
	function($scope, $location) {
		
	}
);*/


function participateMainCtrl ($scope) {	
	$scope.buttonClick = function (btn) {
		console.log("***participateMainCtrl***");
		$scope.msgHide = btn;
	};
}