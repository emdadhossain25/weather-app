// https://api.darksky.net/forecast/13c8311e65fe7ef6e005924fd641169c/23.777176,90.399452

const request = require('request');
request({
    url: 'https://api.darksky.net/forecast/13c8311e65fe7ef6e005924fd641169c/23.777176,90.399452',
    json : true
},(error, response, body)=>{

    if (error){

    }else {
        console.log(`Current temprature: ${((body.currently.temperature)-32)*.5556} C`)
    }
})