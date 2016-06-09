angular.module('app')
  .config(($routeProvider) => {
    $routeProvider
      .when('/pins', {
        templateUrl: 'pins/pin.html',
        controller: 'PinsCtrl'
        // controllerAs: 'pins'
      })
      .when('/addPin', {
        templateUrl: 'pins/addPin.html',
        controller: 'AddNewPinCtrl',
        controllerAs: 'addNewPin'
      })
      .when('/viewBoardPins', {
        templateUrl: 'pins/viewBoardPins.html',
        controller: 'ViewBoardPinsCtrl',
        controllerAs: 'viewBoardPins'
      });
  });
