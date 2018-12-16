var { writeFile, existsSync, readFileSync, unlink } = require("fs");
var path = require("path");

class LocalStorage {
  constructor() {
    this.items = {};
    if (existsSync(path.join(__dirname, "storage.json"))) {
      console.log("Loading items from storage.json");
      var txt = readFileSync(path.join(__dirname, "storage.json"));
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile(
      path.join(__dirname, "storage.json"),
      JSON.stringify(this.items),
      error => {
        if (error) {
          console.log(error);
        }
      }
    );
  }

  clear() {
    this.items = {};
    unlink(path.join(__dirname, "storage.json"), () => {
      console.log("Localstorage file removed");
    });
  }
}

module.exports = new LocalStorage();
