angular.module('app')
	.config(($routeProvider) => (
		$routeProvider
			.when('/', {
				controller: 'LoginCtrl',
				controllerAs: 'login',
				templateUrl: 'login/login.html'
			})
	))