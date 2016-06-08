angular.module('app')
    .factory('BoardsFactory', ['$http', function($http) {
            return $http({
                method: 'GET',
                url: 'https://pied-piper-5ad6b.firebaseio.com/.json'
            }).then(function successCallback(response) {
                console.log("status: ", response.status);
                console.log("data: ", response.data);
            }, function errorCallback(response) {
                console.log("error callback: ", response);
            })
        }])


        //factory only talks to FB and relays info to the view
        //view is only input/output
        //ctrl does work, sends to factory, talks to FB
        //factory passes info to controller then to view
		//module (in each file) gets from FB and/or API's and posts,patch,delete to FB.
