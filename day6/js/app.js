var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl : 'templates/login.html'
    })
    .when('/home',{
        templateUrl : 'templates/home.html'
    })
    .otherwise({
        redirectTo: 'templates/default.html'
    })

}])

myApp.controller('myCtrl',['$scope', function($scope){
    
}])