angular.module('app')
  .controller('PinsCtrl', function ($scope, pinsFactory){
    $scope.userTest = "Mine Now"
    function PenPin(){
      pinsFactory.getPins("board1")
    }
  })
