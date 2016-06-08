'use strict';

angular.module('app')
  .controller('BoardsCtrl', ['$scope', 'BoardsFactory', 'LoginFactory', '$location', '$timeout', function ($scope, BoardsFactory, LoginFactory, $location, $timeout) {
    $scope.board = [];

    $scope.addBoard = function () {
      $scope.board.push($scope.board);
    }

    $scope.seeBoard = function () {

    }

    $scope.logout = function () {
    	LoginFactory.logout()
    		.then($location.path.bind($location, '/'))
    		.then($timeout)
    }
  }])
