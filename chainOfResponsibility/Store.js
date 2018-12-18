var Storage = require("./Storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    var floor = new Storage("store floor", inventory.floor);
    var backroom = new Storage("back room", inventory.backroom);
    var localStore = new Storage("local store", inventory.localStore, 1);
    var warehouse = new Storage("warehouse", inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.Storage = floor;
  }

  find(itemName) {
    return this.Storage.find(itemName);
  }
}

module.exports = Store;
