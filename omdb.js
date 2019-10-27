module.exports = function (request) {
    var axios = require('axios');

    var queryUrl = "http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            let movie = response.data;

            if (response.data.Response == 'False') {
                console.log(response.data.Error);
            }
            else {
                console.log("Title: " + movie.Title);
                console.log("Year: " + movie.Year);
                console.log("IMDB Rating: " + movie.Ratings[0].value);
                console.log("Rotten Tomatoes Rating: " + movie.Ratings[0].Value);
                console.log("Produced in: " + movie.Country);
                console.log("Language: " + movie.Language);
                console.log("Plot: " + movie.Plot);
                console.log("Actors: " + movie.Actors);
                console.log("Rated: " + movie.Rated);
            }
        })
        // Error Catching
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}