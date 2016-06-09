angular.module('app')
  .controller('PinsCtrl', function ($scope, pinsFactory, BoardFactory, LoginFactory, $timeout, $location){
    function PenPin(){
      pinsFactory.getPins("board1")
    }
    $scope.logout = function () {
    	LoginFactory.logout()
    		.then($location.path.bind($location, '/'))
    		.then($timeout)
    }
  })
  .controller("AddNewPinCtrl", function($scope, $location, $timeout, pinsFactory, LoginFactory, BoardsFactory) {
    const addNewPin = this;
    const boardId = BoardsFactory.getBoardId();;

    addNewPin.addPin = (id) => {
      const userId = LoginFactory.getUserData().user;
      const userToken = LoginFactory.getUserData().authToken;
      const url = addNewPin.url;
      console.log(addNewPin.url);
      const title = addNewPin.title;
      pinsFactory.addPin(userId, userToken, boardId, url, title)
      .then($location.path.bind($location, '/boards'))
      .then($timeout)
    };
  })
  .controller("ViewBoardPinsCtrl", function($scope, $timeout, $location, pinsFactory, BoardsFactory, LoginFactory) {
    const viewBoardPins = this;
    viewBoardPins.boardId = BoardsFactory.getBoardId();
    viewBoardPins.boardPins = pinsFactory.getPins(viewBoardPins.boardId);
    console.log(viewBoardPins.boardPins);
    viewBoardPins.goToAddPin = () => {
      $location.path("/addPin");
      $timeout();
    };
  });
