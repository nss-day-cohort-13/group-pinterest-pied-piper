'use strict';

angular.module('app')
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/boards', {
            templateUrl: 'boards/boards.html',
            controller: 'BoardsCtrl'
        })
        .when('/create-board', {
            templateUrl: '/boards/create.board.html',
            controller: 'CreateBoardCtrl'
        })
}])
