// JavaScript Document

var myApp = angular.module('app', []);


/// VALUE RECIPE

/*myApp.value('myClientId', 'a12345654321x');

//type1
myApp.controller('DemoController', ['myClientId', function DemoController(cid) {
  this.clientId = cid;
}]);


//type2
function DemoController (cid) {
	this.clientId = cid;
}
DemoController['$inject'] = ['myClientId'];*/





/// FACTORY RECIPE

//if 1st preference not available
/*myApp.factory('clientIdService', function clientIdFactory() {
  return 'a12345654321x';
});

//1st preference
myApp.factory('clientIdService', function() {
  return 'a12345654321x1';
});

myApp.controller('DemoController', ['clientIdService', function DemoController(CIS) {  
	  this.clientId = CIS;  
}]);*/





/// SERVICE RECIPE

function UnicornLauncher123(clientIdService) {
	this.newClientId
	this.launchedCount = 0;
	
	this.launch = function() {    
		this.launchedCount++;
		
		this.newClientId = clientIdService+' '+this.launchedCount+' '+'new';
		//return this.newClientId;
	}
	
	this.launch(); 
}

//myApp.factory('unicornLauncher', ["clientIdService", function(clientIdService) {
	//return new UnicornLauncher123(clientIdService);
//}]);


function test1 () {
	alert("hi");
}

myApp.service('unicornLauncher', ["clientIdService", UnicornLauncher123]);
myApp.service('newTest', test1);

myApp.factory('clientIdService', function() {
	return 'old';
});

myApp.controller('DemoController', ['unicornLauncher', 'newTest', function DemoController(unicornLauncher) {  
	this.clientId = unicornLauncher.newClientId;  
	console.log(unicornLauncher);
}]);





/// PROVIDER RECIPE

/*function UnicornLauncher123(clientIdService, useTinfoilShielding) {
	this.newClientId
	this.launchedCount = 0;
	this.isUseTinfoilShielding = useTinfoilShielding;
	
	this.launch = function() {    
		this.launchedCount++;
		
		this.newClientId = clientIdService+' '+this.launchedCount+' '+'new';
		//return this.newClientId;
	}
	
	this.launch(); 
}

myApp.factory('clientIdService', function() {
	return 'old';
});



//can be access in config phase only
myApp.provider('unicornLauncher', function UnicornLauncherProvider() {
  var useTinfoilShielding = false;

  this.useTinfoilShielding = function(value) {
    useTinfoilShielding = !!value;
  };

  this.$get = ["clientIdService", function unicornLauncherFactory(clientIdService) {

    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return new UnicornLauncher123(clientIdService, useTinfoilShielding);
  }];
});

myApp.controller('DemoController', ['unicornLauncher', function DemoController(unicornLauncher) {  
	///unicornLauncher.useTinfoilShielding(true);
	this.clientId = unicornLauncher.newClientId; 
	console.log(unicornLauncher); 
}]);*/




/// CONSTANT RECIPE

/*function UnicornLauncher123(clientIdService, useTinfoilShielding) {
	this.newClientId
	this.launchedCount = 0;
	this.isUseTinfoilShielding = useTinfoilShielding;
	
	this.launch = function() {    
		this.launchedCount++;
		
		this.newClientId = clientIdService+' '+this.launchedCount+' '+'new';
		//return this.newClientId;
	}
	
	this.launch(); 
}


myApp.factory('clientIdService', function() {
	return 'old';
});

myApp.provider('unicornLauncher', function UnicornLauncherProvider() {
  this.useTinfoilShielding = false;

  this.useTinfoilShielding = function(value) {
    useTinfoilShielding = !!value;
  };

  this.$get = ["clientIdService", function unicornLauncherFactory(clientIdService) {

    // let's assume that the UnicornLauncher constructor was also changed to
    // accept and use the useTinfoilShielding argument
    return new UnicornLauncher123(clientIdService, useTinfoilShielding);
  }];
});

//can't access myClientId in config, bcaz it is available in only app life-cycle's run phase
//myApp.value('myClientId', 'a12345654321x');

//to access we have to use CONSTANT RECIPE, it is available in both config & run phase
myApp.constant('myClientId', 'a12345654321x');

myApp.config(['unicornLauncherProvider', 'myClientId', function(unicornLauncherProvider, cid) {
	//alert(cid)
	unicornLauncherProvider.useTinfoilShielding(true);
}]);

myApp.controller('DemoController', ['unicornLauncher', function DemoController(unicornLauncher) {  
	this.clientId = unicornLauncher.newClientId;  
	console.log(unicornLauncher);
	console.log(unicornLauncher.isUseTinfoilShielding);
}]);*/




///SPECIAL PURPOSE OBJECTS
/*
myApp.constant('planetName', 'Earth234');

myApp.directive('myPlanet', ['planetName', function myPlanetDirectiveFactory(mp) {
  // directive definition object
  return {
    restrict: 'E',
    scope: {},
    link: function($scope, $element) { 
		$element.text('Planet: ' + mp); 
		console.log($element)
	}
  }
}]);

*/