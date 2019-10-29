module.exports = function (request) {
    var Spotify = require("node-spotify-api");
    var keys = require("./keys.js");

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: request }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let tracks = data.tracks.items;

        if (tracks.length == 0) {
            console.log("No songs found.")
        }
        else {
            for (let i = 0; i < 10; i++) {
                console.log("Artist: " + getArtists(tracks[i].artists));
                console.log("Album: " + tracks[i].album.name);
                console.log("Title: " + tracks[i].name);
                console.log("Open in Spotify: " + tracks[i].external_urls.spotify);
                console.log("/--------------------------");
            }
        }
    });

    function getArtists(array) {
        result = "";

        for (let i = 0; i < array.length; i++) {
            if (i < (array.length - 1)) {
                result += array[i].name + ", ";
            }
            else {
                result += array[i].name;
            }
        }

        return result;
    }

}