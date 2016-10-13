/**
 * 
 */
(function(){
    
	var app = angular.module("weatherApp");
    app.config(function($routeProvider){
        $routeProvider
            .when("/start", {
                templateUrl: "app/components/start/startView.html",
                controller: "startController"
            })
            .when("/weather/:cityName", {
            	templateUrl: "app/components/weather/weatherView.html",
                controller: "weatherController"
            })
            .when("/forecast/:cityName", {
            	templateUrl: "app/components/forecast/forecastView.html",
                controller: "forecastController"
            })
            .otherwise({redirectTo:"/start"});
    });
    
}());