'use strict';

var app = angular.module("testApp.homeController", []).controller('HomeController', 
	function($scope, $location) {
		$scope.buttonClick = function (btn) {
			console.log("you click "+btn);
			$scope.msgHide = btn;
		};
	}
);