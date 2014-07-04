'use strict';

var app = angular.module("testApp.galleryController", []).controller('GalleryController', 
	function($scope, $location) {
		$scope.buttonClick = function (btn) {
			console.log(" gallery you click "+btn);
			$scope.msgHide = btn;
		};
	}
);