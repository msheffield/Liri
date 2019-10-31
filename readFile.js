module.exports = function (omdb, bandsInTown, spotify, keys) {
    var fs = require("fs");
    var selectCase = require("./selectCase.js");
    
    fs.readFile("random.txt", "utf8", function (error, data) {
        let lines = data.split('\n');
        console.log(lines);

        lines.forEach(line => {
            let args = line.split(',');

            let command = args[0];
            let query = "";

            if (args.length > 1) {
                query = JSON.parse(args[1]);
            }

            selectCase(command, query);
        })
    
    })
}