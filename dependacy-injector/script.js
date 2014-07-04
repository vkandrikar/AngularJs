// JavaScript Document

var app = angular.module("app", []);

app.factory('test1', 
	['$window',
	function (win) {
		var msgArr = [];
		
		return {
			alertMsg: function (msg) {
				msgArr.push(msg);
				if (msgArr.length == 3) {
					win.alert(msgArr.join("\n"));
					msgArr = [];
				}
			}
		};	
	}]
);


function myController (scope, test) {
	scope.callNotify = function (msg) {
		test.alertMsg(msg);
	};
}

//myController.$inject = ['$scope', 'test1'];
myController['$inject'] = ['$scope', 'test1'];