// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("switchableGrid", ['ngResource']);

// can't be minify
// Create and register the new "instagram" service
app.factory('instagram', function($resource){

	return {
		fetchPopular: function(myCallback){

			// The ngResource module gives us the $resource service. It makes working with
			// AJAX easy. Here I am using a client_id of a test app. Replace it with yours.

			var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:myClientId&callback=JSON_CALLBACK',
			{
				myClientId: '642176ece1e7445e99244cec26f4de1f'
			},{
				// This creates an action which we've chosen to name "callbackFuntName". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.

				callbackFuntName:{method:'JSONP'}
			});

			api.callbackFuntName(function(response){

				// Call the supplied myCallback function
				//console.log(response);
				myCallback(response.data);

			});
		},//end of fetchPopular
		
		getGalleryData: function (galleryCallback) {
			var galleryApi = $resource("http://localhost/Angular-JS/switchable-grid/data/testpolling.json",
			//var galleryApi = $resource("https://airasiaxtakeover.appspot.com/videoInfo?method=getGallaryExceptPoll&vidCat=1",
			{
				
			},
			{
				galleryDataOnSuccess:{method:'GET'}
			});
			
			galleryApi.galleryDataOnSuccess(function(response) {
				//console.log(response);
				galleryCallback(response);
			});			
		}//end of getGalleryData
		
	}

});


// can't be minify
app.factory('StudentService', function($resource){
    return $resource('http://localhost/Angular-JS/switchable-grid/data/testpolling.json');
 	//return $resource('https://airasiaxtakeover.appspot.com/videoInfo?method=getGallaryExceptPoll&vidCat=1&alt=json');
});



// can be minify
app.factory('myHttpTestSevice', 
	['$http', 
	function(http) {
		return {
			getGalleryData: function (galleryCallback) {
				/*var url = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";
				return $http.jsonp(url).success(function(result) {
					console.log("myHttpTestSevice result: "+result);
				});*/
				
				http({
					///type 1
					/*method: 'GET', 
					url: 'http://localhost/Angular-JS/switchable-grid/data/testpolling.json'*/
					
					///type 2
					method: 'JSONP', 
					url: 'https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK'
				}).
				success(function(data, status, headers, config) {
					galleryCallback(data, status);
					// this callback will be called asynchronously
					// when the response is available
				}).
				error(function(data, status, headers, config) {
					galleryCallback(data, status);
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
		};
	}]
);


var myHttpServiceFactoryType2 = function($http) {
	return {
		getGalleryData: function (galleryCallback) {			
			$http({
				///type 1
				/*method: 'GET', 
				url: 'http://localhost/Angular-JS/switchable-grid/data/testpolling.json'*/
				
				///type 2
				method: 'JSONP', 
				url: 'https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK'
			}).
			success(function(data, status, headers, config) {
				galleryCallback(data, status);
				// this callback will be called asynchronously
				// when the response is available
			}).
			error(function(data, status, headers, config) {
				galleryCallback(data, status);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
	};
};
myHttpServiceFactoryType2.$inject = ['$http'];
app.factory('myHttpTestSeviceType2', myHttpServiceFactoryType2);
  

// The controller. Notice that I've included our instagram service which we
// defined below. It will be available inside the function automatically.


///type1	support minify
function SwitchableGridController(myScope, myInstagram, mySS, myHTS, myHTST2) {
	myScope.layout = 'grid';

	myScope.pics = [];
	
	myScope.test1 = function () {
		return true;
	};

	// Use the instagram service and fetch a list of the popular pics
	myInstagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		myScope.pics = data;
	});
	
	myInstagram.getGalleryData(function(result) {
		console.log("instagram getGalleryData final success");
	});
	
	mySS.get(function(result) {
		console.log("StudentService get final success");
		console.log(result);
	});
	
	myHTS.getGalleryData(function(result, status) {
		console.log("myHttpTestSevice");
		console.log(result);
	});
	
	myHTST2.getGalleryData(function(result, status) {
		console.log("*****myHttpTestSeviceType2 *****");
		console.log(result);
	});
}

SwitchableGridController.$inject = ['$scope', 'instagram', 'StudentService', 'myHttpTestSevice', 'myHttpTestSeviceType2'];



///Type2	not supported by minify
//this is called implicit dependacy injection
/*function SwitchableGridController($scope, instagram, StudentService, myHttpTestSevice, myHttpTestSeviceType2){

	// Default layout of the app. Clicking the buttons in the toolbar
	// changes this value.

	$scope.layout = 'grid';

	$scope.pics = [];
	
	$scope.test1 = function () {
		return true;
	};

	// Use the instagram service and fetch a list of the popular pics
	instagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		$scope.pics = data;
	});
	
	instagram.getGalleryData(function(result) {
		console.log("instagram getGalleryData final success");
	});
	
	StudentService.get(function(result) {
		console.log("StudentService get final success");
		console.log(result);
	});
	
	myHttpTestSevice.getGalleryData(function(result, status) {
		console.log("myHttpTestSevice");
		console.log(result);
	});
	
	myHttpTestSeviceType2.getGalleryData(function(result, status) {
		console.log("*****myHttpTestSeviceType2 *****");
		console.log(result);
	});
}*/
