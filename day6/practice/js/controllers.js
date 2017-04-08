var myControllers = angular.module("myCtrls",[])

myControllers.controller("homeCtrl", ['$scope', function($scope){
    $scope.welcomeMessage = "Welcome you are on Home page!!";
}]);

myControllers.controller("dataEntryCtrl", ['$scope', function($scope){
    $scope.welcomeMessage = "Please make the new data entry!!";
    
    $scope.newRec={};
    
    $scope.records = [ {name : "Ujjwal Kumar", age : 35, gender : "M", company : "FIS"}, 
                        {name : "Swapnil Joshi", age : 34, gender : "M", company : "FIS"}, 
						{name : "Shivraj Pachling", age : 36, gender : "M", company : "FIS"},
						{name : "Sandeep Vaid", age : 33, gender : "M", company : "WMH"}, 
						{name : "Simar Kaur", age : 33, gender : "F", company : "WMH"},
						{name : "Sandeep Pandit", age : 34, gender : "M", company : "CTS"},
						{name : "Shekahr Dhupkar", age : 33, gender : "M", company : "TCS"},
						{name : "Vijay Kulkarni", age : 35, gender : "M", company : "HSBC"}];
    
    
    
}]);

myControllers.controller("displayCtrl", ['$scope', function($scope){
    $scope.welcomeMessage = "List of data available";
    
}]);

