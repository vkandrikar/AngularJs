'use strict';

var app = angular.module("testApp", [
		"ngRoute",
		"testApp.homeController",
		"testApp.galleryController",
		"testApp.partnersController",
		"testApp.juryController",
		"testApp.faqController",
	]).
	config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
		locationProvider.html5Mode(false);
		
		routeProvider.when('/home', {
			templateUrl: 'templates/home/page.html', 
			controller: 'HomeController'
		});
		
		routeProvider.when('/gallery', {
			templateUrl: 'templates/gallery/page.html'
		});
		
		routeProvider.when('/participate', {
			templateUrl: 'templates/participate/page.html'
		});
		
		routeProvider.when('/partners', {
			templateUrl: 'templates/partners/page.html', 
			controller: 'PartnersController'
		});
		
		routeProvider.when('/jury', {
			templateUrl: 'templates/jury/page.html', 
			controller: 'JuryController'
		});
		
		routeProvider.when('/faq', {
			templateUrl: 'templates/faq/page.html', 
			controller: 'FaqController'
		});
				
		routeProvider.otherwise({redirectTo: '/home'});
	}]
);

app.controller("mainMenuNavController", function ($scope, $location) {
	$scope.showNewPage = function (page) {
		console.log("------->current page: "+ $location.path());
		console.log("------->you clicked on "+ page);		
		$location.path(page);
		
		//replace -> the last history record should be replaced instead of creating a new one
		///$location.path(page).replace();   
	};
	
	$scope.$on('$routeChangeStart', function() { 
		console.log("routeChangeStart");
	});
	
	$scope.$on('$routeChangeError', function() { 
		console.log("routeChangeError");
	});
	
	$scope.$on('$routeChangeSuccess', function() { 
		console.log("routeChangeSuccess");
	});
	
	$scope.$on('$locationChangeStart', function() { 
		console.log("locationChangeStart");
	});
	
	$scope.$on('$locationChangeSuccess', function() { 
		console.log("locationChangeSuccess");
	});
 
	$scope.nextFunct = function () {
		console.log("nextFunct")
	};
});