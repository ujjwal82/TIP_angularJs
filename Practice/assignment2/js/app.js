(function () {
	'use strict';

	var myApp = angular.module('myApp', ['ngMaterial', 'myControllers'])
            .filter('custFilter', function () {
                return function (input) {
                    //debugger;
                    input = input || '';
                    var output = '';
                    output = input.charAt(0);
                    output = output.toUpperCase();
        
                    return output;
                };
            })
    
            .config(function ($mdThemingProvider) {
                $mdThemingProvider
                    .theme('default')
                    .primaryPalette('blue')
                    .accentPalette('teal')
                    .warnPalette('red')
                    .backgroundPalette('grey');
            });
})();
