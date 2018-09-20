/**
 * testing the code for yargs
 */
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

geocode.geocodeAdress(argv.page);