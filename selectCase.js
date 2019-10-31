module.exports = function (input, query) {

    var omdb = require("./omdb.js");
    var bandsInTown = require("./bandsInTown.js");
    var spotify = require("./spotify.js");
    var readFile = require("./readFile.js");

    switch (input) {
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