angular.module('app')
  .controller('PinsCtrl', function ($scope, pinsFactory, LoginFactory, $timeout, $location){
    function PenPin(){
      pinsFactory.getPins("board1")
    }
    $scope.logout = function () {
    	LoginFactory.logout()
    		.then($location.path.bind($location, '/'))
    		.then($timeout)
    }
  })
  .controller("AddNewPinCtrl", function($scope, pinsFactory, LoginFactory) {
    const addNewPin = this;

    addNewPin.addPin = () => {
      const userId = LoginFactory.getUserData().user;
      const userToken = LoginFactory.getUserData().authToken;
      const boardId = "thatBoard";
      const url = addNewPin.url;
      console.log(addNewPin.url);
      const title = addNewPin.title;
      pinsFactory.addPin(userId, userToken, boardId, url, title);
    };

  });
