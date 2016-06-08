angular.module('app')
	.factory('LoginFactory', () => {

	firebase.auth().onAuthStateChanged((userObj) => {
		console.log("userObj: ", userObj);
	})

		return {
			login (email, password) {
				firebase.auth().signInWithEmailAndPassword(email, password)
			},

			register (email, password) {
				firebase.auth().createUserWithEmailAndPassword(email, password)
			}
		}
	})