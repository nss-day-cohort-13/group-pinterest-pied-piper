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
        });
  });
