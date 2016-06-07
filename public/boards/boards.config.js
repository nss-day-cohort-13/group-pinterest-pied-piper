'use strict';

.config(function($routeProvider, $http) {
    $routeProvider
        .when('/boards', {
            templateUrl: 'boards/boards.html',
            controller: 'BoardsCtrl'
        })
        .when('/boards/:id', {
            templateUrl: '/boards/user-board.html',
            controller: 'BoardsCtrl'
        })
      

 
})
