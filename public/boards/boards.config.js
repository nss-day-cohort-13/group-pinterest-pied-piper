'use strict';

angular.module('app')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/boards', {
            templateUrl: 'boards/boards.html',
            controller: 'BoardsCtrl'
        })
        .when('/boards/:id', {
            templateUrl: '/boards/user-board.html',
            controller: 'BoardsCtrl'
        })
      

 
}])
