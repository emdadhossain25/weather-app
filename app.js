const request = require('request');

request({
    url: 'https://reqres.in/api/users?page=2',
    json: true


}, (error, response, body) => {


    // iterating foreach function call for all the elements in body type
    body.data.forEach(function (t) {
        console.log(`first name : ${t.first_name} last name : ${t.last_name} `);
    })
    // the data that comes back from http request is called - body
    // console.log(JSON.stringify(response, undefined, 2))


    // response sends back the statusCode which related to requesting server

    // error object retruns ENOTFOUND

})