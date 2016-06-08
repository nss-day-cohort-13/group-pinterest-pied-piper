'use strict';

angular.module('app')
  .controller('BoardsCtrl', function ($scope, $location, BoardsFactory) {
    $scope.board = [];

    $scope.addBoard = function () {
      $scope.board.push($scope.board);
    }

    $scope.seeBoard = function () {

    }
    newBoardPath(){
      $location.path("/create-board")
    }
  })
  .controller('CreateBoardCtrl', function($scope, CreateBoard) {
    
  })
