module.exports = function (command) {
    var fs = require("fs");
    var moment = require("moment");

    var currentDate = moment().format('LLL');

    var log = currentDate + ": " + command + "\n";

    fs.appendFile('log.txt', log, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}