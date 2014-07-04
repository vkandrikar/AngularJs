// JavaScript Document
var app = angular.module("app", []);


/*SAMPLE 2*/
function todoCtrl ($scope) {
	
	$scope.todos = [
		{text:"list 1", done:false},
		{text:"list 2", done:false},
		{text:"list 3", done:false}
	];
	
	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	};
	
	$scope.addTodoInList = function () {
		if ($scope.todoText!=undefined && $scope.todoText != "") {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = "";
		} else {
			alert("enter text");
		}
	};
		
	$scope.deleteCompletedTodos = function () {
		$scope.todos = $scope.todos.filter(function (todo) {
			return !todo.done;
		});
	};
		
}


/*SAMPLE 3*/