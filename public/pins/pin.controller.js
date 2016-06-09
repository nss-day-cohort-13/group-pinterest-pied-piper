angular.module('app')
  .controller('PinsCtrl', function ($scope, pinsFactory, LoginFactory, $timeout, $location){
    $scope.userTest = "Mine Now"
    function PenPin(){
      pinsFactory.getPins("board1")
    }
    $scope.logout = function () {
    	LoginFactory.logout()
    		.then($location.path.bind($location, '/'))
    		.then($timeout)
    }
  })
  .controller("AddPinCtrl", function() {
    const addPin = this;
    addPin.putPin = 

  });
