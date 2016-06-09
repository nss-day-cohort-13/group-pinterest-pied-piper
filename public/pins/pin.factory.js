angular.module('app')
  .factory('pinsFactory', ($http, firebase_URL, LoginFactory) => {
    let pinList = null;
    return {
      getAllPins(){
        return $http
          .get(`${firebase_URL}/pins.json?auth=${LoginFactory.getUserData().authToken}`)
          .then(response => pinList = response.data)
      },
      getPins(boardId){
        console.log(boardId);
        let boardPins = []
        $http
          .get(`${firebase_URL}/pins.json?auth=${LoginFactory.getUserData().authToken}`)
          .then(response => {
            const allPins = response.data
            console.log(allPins)
            for (var pin in allPins) {
              console.log(allPins[pin].boardIDs);
                if (allPins[pin].boardIDs === boardId) {
                  boardPins[boardPins.length] = allPins[pin];
                }
            }
          });
        return boardPins;
      },
        addPin: (userId, userToken, boardId, url, title) => {
          const pin = {
            "UID": `${userId}`,
            "URL": `${url}`,
            "boardIDs": `${boardId}`,
            "title": `${title}`
          }
          return $http.post(`${firebase_URL}/pins.json?auth=${userToken}`, pin)
            .error(function (status) {
              console.error(status);
            });
        }
    }
  })
