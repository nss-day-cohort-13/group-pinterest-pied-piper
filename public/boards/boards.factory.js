angular.module('app')
    .factory('BoardsFactory', ($http, firebase_URL) => {
        let boardList = null;
            return {
              getBoards(){
                return $http
                  .get(`${firebase_URL}/.json`)
                  .then( response => boardList = response.data)
                      // console.log("status: ", response.status);
                      // console.log("data: ", response.data);
                  // }, function errorCallback(response) {
                  //     console.log("error callback: ", response);
                  // })
              }
            }
        })
    .factory('CreateBoard', ($http, firebase_URL) => {
      return {
        create(board){
          return $http
            .post(`${firebase_URL}/boards.json`)
            .then()
        }
      }


    })

//put http inside new add board controller
//post factory function
//get token
//new controller
//create new partial to add board

//create new board button with ngClick that changes location.path


        //factory only talks to FB and relays info to the view
        //view is only input/output
        //ctrl does work, sends to factory, talks to FB
        //factory passes info to controller then to view
		//module (in each file) gets from FB and/or API's and posts,patch,delete to FB.
