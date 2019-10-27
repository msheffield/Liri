require("dotenv").config();
var omdb = require("./omdb.js");
console.log(omdb);

var keys = require("./keys.js");

var userInput = process.argv[2];

parseInput(userInput);

function parseInput(input) {
    let input_array = input.split('-');
    let query = "";

    for (let i = 1; i < input_array.length; i++) {
        if (i < (input_array.length - 1)) {
            query += (input_array[i] + "-")
        }
        else {
            query += (input_array[i])
        }
    }
        
    switch (input_array[0]) {
        case "movie":
            omdb(query);
            break;

        case "spotify":
            searchSpotify(query)
    
        default:
            console.log("Please use concert, spotify or movie as first input");
            break;
    }
}