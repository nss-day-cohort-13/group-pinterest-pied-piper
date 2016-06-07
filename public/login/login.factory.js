angular.module('app')
	.factory('LoginFactory', () => {

		return {
			login (name, email) {
				console.log("login user: ", name);
				console.log("login email: ", email);
			}
		}
	})