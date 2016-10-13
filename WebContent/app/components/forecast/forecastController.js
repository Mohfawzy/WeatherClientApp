(function() {
	var app = angular.module("weatherApp");
	var forecastController = function($scope, $location, $routeParams, $http) {
		
		var onForecastComplete = function(response){
			$scope.forecast=response.data;
		};
		var onError =function(reason){
			$scope.error="Could not fetch the forecast for the selected City name right now";
		};
		$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+$routeParams.cityName+"&APPID=589def30a4d74f173566b9654a9e8c69&units=metric&cnt=5").then(onForecastComplete, onError)
		

				$scope.back = function() {
			$location.path("/start");
		};

	}
	app.controller("forecastController", forecastController);
}());