angular.module('app')
	.factory('LoginFactory', () => {

		return {
			login (email, password) {
				console.log("login user: ", email);
				console.log("login password: ", password);
			},

			register (email, password) {
				console.log("login user: ", email);
				console.log("login password: ", password);
			}
		}
	})