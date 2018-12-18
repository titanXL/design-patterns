var path = require("path");

var { appendFile } = require("fs");

class LogStrategy {
  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    var fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timestamp} - ${message} \n`, e => {
      if (e) {
        console.log("Error writing to file");
        console.error(e);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static toMorseCode(timestamp, message) {
    console.log(`Beep boop ${timestamp} - ${message} dash dash`);
  }

  static none() {}
}

module.exports = LogStrategy;
