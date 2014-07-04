var app = angular.module("app", ["ngRoute"]).config(function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl: "templates/home/page.html",
		controller: "homeController"
	});
	
	$routeProvider.when("/gallery", {
		templateUrl: "templates/gallery/page.html",
		controller: "galleryController"
	});	
	
	$routeProvider.when('/participate', {
		templateUrl: "templates/participate/page.html",
		controller: "participateController"
	});
	
	$routeProvider.when('/partners', {
		templateUrl: "templates/partners/page.html",
		controller: "partnersController"
	});
	
	$routeProvider.when('/participate', {
		templateUrl: "templates/participate/page.html",
		controller: "participateController"
	});
	
	$routeProvider.when('/jury', {
		templateUrl: "templates/jury/page.html",
		controller: "juryController"
	});
	
	$routeProvider.when('/faq', {
		templateUrl: "templates/faq/page.html",
		controller: "faqController"
	});
	
	$routeProvider.otherwise({redirectTo: "/home"});
});

app.controller("mainMenuNavController", function ($scope, $location) {
	$scope.showNewPage = function (page) {
		console.log("you clicked on "+page);
		$location.path(page);
	};
	
	$scope.nextFunct = function () {
		console.log("nextFunct")
	};
});

app.controller("homeController", function ($scope) {	
});

app.controller("galleryController", function ($scope) {
});

app.controller("participateController", function ($scope) {
});

app.controller("partnersController", function ($scope) {
});

app.controller("juryController", function ($scope) {
});

app.controller("faqController", function ($scope) {
});
