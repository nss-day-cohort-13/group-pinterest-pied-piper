angular.module('app', [ngRoute])
  .config(($routeProvider) => {
    $routeProvider
      .when('/pins', {
        templateURL: /public/pins/pin.config.js
        controller: 'PinsCtrl'
      })
  })
