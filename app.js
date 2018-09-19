const request = require('request');

request({
    url:'https://reqres.in/api/users?page=2',
    json: true


}, (error, response, body) =>{

    // the data that comes back from http request is called - body
    console.log(JSON.stringify(response, undefined, 2))


    // response sends back the statusCode which related to requesting server

    // error object retruns ENOTFOUND

})