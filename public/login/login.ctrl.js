angular.module('app')
	.controller('LoginCtrl', function (LoginFactory) {
		const login = this;

		login.loginUser = (email, password) => {
			LoginFactory.login(email, password);
		}

		login.registerUser = (email, password) => {
			LoginFactory.register(email, password);
		}
	})