'use strict';

angular.module('pied-piper')
  .controller('BoardsCtrl', function ($scope) {
    $scope.board = [];

    $scope.addBoard = function () {
      $scope.board.push($scope.board);
    }

    $scope.seeBoard = function () {
      
    }
  })
