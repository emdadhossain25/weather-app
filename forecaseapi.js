// https://api.darksky.net/forecast/13c8311e65fe7ef6e005924fd641169c/23.777176,90.399452

const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/13c8311e65fe7ef6e005924fd641169c/23.777176,90.399452',
    json: true
}, (error, response, body) => {

    if (error) {
        console.log('Unable to connect to Forecast.io server.')
    } else if (response.statusCode === 400) {
        console.log('Unable to fetch weather')
    }
    else if (response.statusCode === 200) {
        console.log(`Current temprature: ${((body.currently.temperature) - 32) * .5556} C`)
    }
})