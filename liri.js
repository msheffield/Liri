require("dotenv").config();
var omdb = require("./omdb.js");
var bandsInTown = require("./bandsInTown.js");
var spotify = require("./spotify.js");
var readFile = require("./readFile.js");
var log = require("./log.js");

var userInput = process.argv[2];

log(userInput);

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
            if (query == "") {
                query = "Mr-Nobody";
            }
            omdb(query);
            break;

        case "spotify":
            if (query == "") {
                query = "Silence";
            }
            spotify(query);
            break;

        case "concert":
            if (query == "") {
                query = "Fish";
            }
            query = query.replace("-", "+");
            bandsInTown(query);
            break;

        case "do":
            if (query = "what-it-says") {
                readFile(omdb, bandsInTown, spotify);
            }
            else {
                console.log("Do what?");
            }
            break;

        default:
            console.log("Please use concert, spotify or movie as first input");
            break;
    }
}