angular.module('app', ['ngRoute', 'ui.bootstrap'])
  .constant('firebase_URL', 'https://pied-piper-5ad6b.firebaseio.com/')
firebase.initializeApp({
    apiKey: "AIzaSyBCg1iZs_MQxz9eiGaxjj8NjpfzqRwAHa8",
    authDomain: "pied-piper-5ad6b.firebaseapp.com",
    databaseURL: "https://pied-piper-5ad6b.firebaseio.com",
    storageBucket: "pied-piper-5ad6b.appspot.com"
  });
