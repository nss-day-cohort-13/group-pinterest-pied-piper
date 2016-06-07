angular.module('app')
	.controller('LoginCtrl', function (LoginFactory) {
		const login = this;

		login.login = (name, email) => {
			LoginFactory.login(name, email);
		}
	})