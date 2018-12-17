var Shopper = require("./Shopper");
var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require("./InventoryItem");

var alex = new Shopper("Alex", 10000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldenInventoryItem(necklace);
var diamond_gold_necklase = new DiamondInventoryItem(gold_necklace);

var diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_necklase);
alex.purchase(diamond_walkman);

alex.printStatus();

diamond_walkman.print();
