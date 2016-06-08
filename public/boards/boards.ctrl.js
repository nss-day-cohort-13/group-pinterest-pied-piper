'use strict';

angular.module('app')
  .controller('BoardsCtrl', ['$scope', 'BoardsFactory',function ($scope, BoardsFactory) {
    $scope.board = [];

    $scope.addBoard = function () {
      $scope.board.push($scope.board);
    }

    $scope.seeBoard = function () {
      
    }
  }])
