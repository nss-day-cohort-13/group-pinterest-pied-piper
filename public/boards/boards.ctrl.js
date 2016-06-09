'use strict';

angular.module('app')
  .controller("BoardsCtrl", function(
    BoardsFactory, LoginFactory, $location, $scope, $timeout
  ){
    const boards = this;
    boards.boardsList = null
    BoardsFactory.getBoards()
      .then((response) => {
        boards.boardsList = response;
      })
      .then($timeout)
      .then(() => console.log(boards.boardsList));

    boards.showBoardPins = (key) => {
      BoardsFactory.setBoardId(key);
      $location.path("/viewBoardPins");
      $timeout();
    };

    boards.goToUserBoard = () => {
      $location.path("/userBoards");
      $timeout;
    }

    boards.logout = function () {
      LoginFactory.logout()
      .then($location.path.bind($location, '/'))
      .then($timeout)
    };
  })
  .controller("UserBoardsCtrl", function(
    BoardsFactory, LoginFactory, $location, $scope, $timeout
  ){
    const userBoards = this;
    userBoards.userBoardsList = BoardsFactory.getUserBoards()
    console.log(userBoards.userBoardsList);
    userBoards.showBoardPins = (key) => {
      BoardsFactory.setBoardId(key);
      $location.path("/viewBoardPins");
      $timeout();
    };

  })
