require("dotenv").config();

var selectCase = require("./selectCase.js");
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

    selectCase(input_array[0], query);
}