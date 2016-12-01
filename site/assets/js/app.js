'use strict';   // See note about 'use strict'; below

var myApp = angular.module('myApp', [
 'ngRoute',
]);

myApp.config(['$routeProvider',
     function($routeProvider) {
         $routeProvider.
             when('/', {
                 templateUrl: '/templates/partials/index.html',
             }).
             when('/about', {
                 templateUrl: '/templates/partials/about.html',
             }).
             otherwise({
                 redirectTo: '/'
             });
    }]);