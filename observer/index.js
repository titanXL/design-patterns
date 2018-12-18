var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

catsAndThings.sale(20);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

insAndOuts.sale(50);

console.log(valleyMall.sales);
