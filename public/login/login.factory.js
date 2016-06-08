angular.module('app')
	.factory('LoginFactory', () => {
		let userId;
		let	token;

	firebase.auth().onAuthStateChanged((user) => {
		console.log("user: ", user);
		if (user) {
			userId = user.uid;
			user.getToken()
				.then(t => token = t)
				.then(console.log("token: ", token))
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