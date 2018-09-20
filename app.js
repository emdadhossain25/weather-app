/**
 * testing the code for yargs
 */

// secret key for forecast.io API - 13c8311e65fe7ef6e005924fd641169c


const geocode = require('./geocode/geocode')
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

geocode.geocodeAdress(argv.page, (errorMessage, results) => {
    if (errorMessage)
        console.log(errorMessage)
    else
        console.log(JSON.stringify(results, undefined, 2))
});