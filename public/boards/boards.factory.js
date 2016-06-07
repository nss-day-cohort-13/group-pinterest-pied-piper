$http({
    method: 'GET',
    url: 'https://pied-piper-5ad6b.firebaseio.com/'
}).then(function successCallback(response) {
    console.log("status: ", status);
    console.log("data: ", data);
}, function errorCallback(response) {
    console.log("error callback: ", response);
})
