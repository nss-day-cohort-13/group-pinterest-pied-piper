angular.module('app')
  .factory('pinsFactory', ($http, firebase_URL) => {
    let pinList = null;
    return {
      getAllPins(){
        return $http
          .get(`${firebase_URL}/pins.json`)
          .then(response => pinList = response.data)
      },
      getPins(boardId){
        let boardPins = []
        return $http
          .get(`${firebase_URL}/pins.json`)
          .then(response => {
            const allPins = response.data
            console.log(allPins)
            for (var pinID in allPins) {
              for (var board in allPins.pinID.boardIDs) {
                if (board === boardId) {
                  console.log(board)
                }
              }
            }
          })
      }
    }
  })
