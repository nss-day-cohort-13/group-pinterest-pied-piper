angular.module('app')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/pins', {
        templateUrl: 'pins/pin.html',
        controller: 'PinsCtrl',
        // controllerAs: 'pins'
      })
  }])
