module.exports = function (request) {
    var axios = require('axios');
    var moment = require('moment');

    axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp").then(
        function (response) {
            if (response.data.length == 0) {
                console.log("No upcoming concerts for this artist.");
            }
            else {
                response.data.forEach(item => {
                    console.log("Line Up: " + item.lineup);
                    console.log("Venue: " + item.venue.name + " in " + item.venue.city + ", " + item.venue.country);
                    let date = item.datetime.slice(0, 10);
                    console.log("On: " + parseDate(date));
                    console.log("/--------------------------");
                })
            }
        })
        .catch(function (errror) {
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
        })

    function parseDate(date) {
        let date_array = date.split("-");
        let formattedDate = (date_array[1] + "-" + date_array[2] + "-" + date_array[0]);

        return moment(formattedDate, "MM-DD-YYYY").format('LL');
    }
}