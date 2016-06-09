angular.module('app')
    .factory('BoardsFactory', ($http, $parse, firebase_URL, LoginFactory) => {
      let boardsList = null;
      let boardId = null;
        return {
          getBoards: () => {
            return $http({
              method: 'GET',
              url: `${firebase_URL}/boards.json?auth=${LoginFactory.getUserData().authToken}`
            }).then((response) => {
                return (response.data);
              }, (response) => {
                console.error(response.status);
              });
          },
          getUserBoards(){
            let userBoards = []
            $http
              .get(`${firebase_URL}/boards.json?auth=${LoginFactory.getUserData().authToken}`)
              .then(response => {
                const allBoards = response.data;
                console.log(allBoards)
                for (var board in allBoards) {
                  console.log(allBoards[board].UID);
                  console.log(LoginFactory.getUserData().user);
                    if (allBoards[board].UID == LoginFactory.getUserData().user) {
                      userBoards[userBoards.length] = allBoards[board];
                    }
                }
              });
              console.log(userBoards);
            return userBoards;
          },
          setBoardId: key => (boardId = key),
          getBoardId: () => (boardId)
        }
      })

        //factory only talks to FB and relays info to the view
        //view is only input/output
        //ctrl does work, sends to factory, talks to FB
        //factory passes info to controller then to view
		//module (in each file) gets from FB and/or API's and posts,patch,delete to FB.
