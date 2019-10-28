# Liri

Do you ever find yourself staring at the console without a clue what artist plays the song that just came on the radio? Well fear no more! LIRI is the node app for you. You can search song names to get back information from Spotify, artists to get a list of concert dates and even get information on your favorite movies!

## How do I use LIRI?

It's easy, just follow these steps!

1. The format for running a command is as follows: "node liri.js <option>-<query>".

2. <option> can be "movie" for movies, "concert" for a list of concerts or "spotify" for song information.

3. <query> can be an artist, song name or movie title. Instead of spaces, use "-". A search for Bob Dylan would be input as "bob-dylan" or "Bob-Dylan".

4. If you want to run from the random.txt file, use the "node liri.js do-what-it-says" command.

5. The result will be displayed in the console log, and your command will be logged in log.txt with a timestamp.

## Setting up Liri

You will need your own .env file to run Liri. The .env file will need to contain the following:

`
SPOTIFY_ID=<your_spotify_id>
SPOTIFY_SECRET=<your_spotify_secret>
`

Make sure to install the appropriate packages as well. This program uses:
* dotenv
* axios
* moment
* node-spotify-api