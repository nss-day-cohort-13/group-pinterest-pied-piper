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

    boards.logout = function () {
      LoginFactory.logout()
      .then($location.path.bind($location, '/'))
      .then($timeout)
    };
  })
