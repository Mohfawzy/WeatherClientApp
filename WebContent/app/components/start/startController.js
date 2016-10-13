(function() {
	var app = angular.module("weatherApp");
	var startController = function($scope, $location) {
		$scope.pattern = "[a-zA-Z ]*$";
		$scope.cityName = "Koeln";
		$scope.getWeather = function() {
			$location.path("/weather/" + $scope.cityName);
		};
		$scope.getforecast = function() {
			$location.path("/forecast/" + $scope.cityName);
		};
	};
	app.controller("startController", startController);
}());