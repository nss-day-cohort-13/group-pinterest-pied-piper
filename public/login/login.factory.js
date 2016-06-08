angular.module('app')
	.factory('LoginFactory', () => {
		let userId;
		let	token;

	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			userId = user.uid;
			user.getToken()
				.then(t => token = t)
				.then()
		}
	})

		return {
			login (email, password) {
				firebase.auth().signInWithEmailAndPassword(email, password)
			},

			register (email, password) {
				firebase.auth().createUserWithEmailAndPassword(email, password)
			},

			getUserData () {
				return {user: userId, authToken: token};
			}
		}
	})