'use strict';

angular.module('app')
  .controller('BoardsCtrl', function ($scope, $location, BoardsFactory) {
    $scope.board = [];

    $scope.addBoard = function () {
      $scope.board.push($scope.board);
    }

    $scope.seeBoard = function () {

    }
    $scope.newBoardPath = () => {
      $location.path("/create-board")
    }
  })
  .controller('CreateBoardCtrl', function($scope, CreateBoard) {
    CreateBoard.create = //calls factory and provides it a single object

    //get auth data from auth factory
    //request from pin factory for pins belonging to the board

    //function to take info from dom

    //function buildObj(input) {
      var obj = {
        1: input.name,
        2:input.desc,
        3: authFactory.getAuth(),
        4: pinFactory.getPins()
      }
      BoardsFactory.create(obj);
  }
  })
