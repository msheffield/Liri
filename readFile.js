module.exports = function (omdb, bandsInTown, spotify, keys) {
    var fs = require("fs");

    async function apiCall(whichAPIService, Request) {
        return await whichAPIService(Request)
    }

    
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

            switch (command) {
                case "movie":
                    if (query == "") {
                        query = "Mr-Nobody";
                    }
                    apiCall(omdb, query);
                    break;

                case "spotify":
                    if (query == "") {
                        query = "Silence";
                    }
                    apiCall(spotify, query);
                    break;

                case "concert":
                    if (query == "") {
                        query = "Fish";
                    }
                    query = query.replace("-", "+");
                    apiCall(bandsInTown, query);
                    break;
            }
        })
    })
}