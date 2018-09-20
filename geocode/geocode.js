const request = require('request');

const geocodeAdress = (address, callback) => {

    var encodedAddress = encodeURIComponent(address)

    /**
     * ending of yargs for using commandline alias and passing arguements
     * example code for running the code: node app.js -p '2'
     */

    request({
        url: `https://reqres.in/api/users?page=${encodedAddress}`,
        json: true


    }, (error, response, body) => {


        if (error) {
            callback('Unable to connect to Google Servers');
        } else {
            // iterating foreach function call for all the elements in body type
            body.data.forEach(function (t) {

                callback(undefined, {
                    firstname : t.first_name,
                    lastname : t.last_name,
                    avatar : t.avatar
                })



            })
        }
        // the data that comes back from http request is called - body
        // console.log(JSON.stringify(response, undefined, 2))


        // response sends back the statusCode which related to requesting server

        // error object retruns ENOTFOUND

    })
}


module.exports = {
    geocodeAdress
}