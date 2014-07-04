// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("switchableGrid", ['ngResource']);


// Create and register the new "instagram" service
app.factory('instagram', 
	['$resource', 
	function(resource) {
		return {
			fetchPopular: function(myCallback){
	
				// The ngResource module gives us the $resource service. It makes working with
				// AJAX easy. Here I am using a client_id of a test app. Replace it with yours.
	
				var api = resource('https://api.instagram.com/v1/media/popular?client_id=:myClientId&callback=JSON_CALLBACK',
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
				var galleryApi = resource("http://localhost/Angular-JS/switchable-grid/data/testpolling.json",
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
	}
]);


function SwitchableGridController(myScope, myInstagram) {	

	// Use the instagram service and fetch a list of the popular pics
	myInstagram.fetchPopular(function(data){

		// Assigning the pics array will cause the view
		// to be automatically redrawn by Angular.
		console.log(data)
	});
	
	myInstagram.getGalleryData(function(result) {
		console.log(result);
	});
}

SwitchableGridController.$inject = ['$scope', 'instagram'];
