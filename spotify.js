module.exports = function (keys, request) {
    var Spotify = require("node-spotify-api");

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: request }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].artists);
    });

}