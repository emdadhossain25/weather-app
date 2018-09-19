const request = require('request');


/**
 * testing the code for yargs
 */

const yargs = require('yargs');
const argv = yargs
    .options({
        p: {
            demand: true,
            alias: 'page',
            describe: 'page number to fetch',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


var encodedAddress = encodeURIComponent(argv.page)

/**
 * ending of yargs for using commandline alias and passing arguements
 * example code for running the code: node app.js -p '2'
 */

request({
    url: `https://reqres.in/api/users?page=${encodedAddress}`,
    json: true


}, (error, response, body) => {


    if (error) console.log('Unable to connect to Google Servers');
    else {
        // iterating foreach function call for all the elements in body type
        body.data.forEach(function (t) {
            console.log('-----------------------')
            console.log('\n')
            console.log(`id: ${t.id} `);
            console.log(`first name : ${t.first_name} last name : ${t.last_name} `);
            console.log(`avatar : ${t.avatar}  `);
            console.log('\n')

        })
    }
    // the data that comes back from http request is called - body
    // console.log(JSON.stringify(response, undefined, 2))


    // response sends back the statusCode which related to requesting server

    // error object retruns ENOTFOUND

})