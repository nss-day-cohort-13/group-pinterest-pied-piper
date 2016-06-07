angular.module('app')
	.controller('LoginCtrl', function (LoginFactory) {
		const login = this;

		login.login = (email, password) => {
			LoginFactory.login(email, password);
		}

		login.register = (email, password) => {
			LoginFactory.register(email, password);
		}
	})