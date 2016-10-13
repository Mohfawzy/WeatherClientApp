(function() {
	var app = angular.module("weatherApp");
	var weatherController = function($scope, $location, $routeParams, $http) {

		var onWeatherComplete = function(response) {
			$scope.weather = response.data;
		};
		var onError = function(reason) {
			$scope.error = "Could not fetch the Weather for the selected City name right now";
		};
		$http.get(
				"http://api.openweathermap.org/data/2.5/weather?q="
						+ $routeParams.cityName
						+ "&APPID=589def30a4d74f173566b9654a9e8c69").then(
				onWeatherComplete, onError)
		$scope.back = function() {
			$location.path("/start");
		};

	}
	app.controller("weatherController", weatherController);
}());