// Охуеть, модули. Неожиданно?
const mindFuck = require("./mind-fuck.js");
const names = require("./names.js");
const funcs = require("./funcs.js");
const data = require("./some-scientific-shit.js");

funcs.sayHi("Tony");
funcs.sayHi(names.fuckingPidor);
funcs.sayHi(names.fuckingJohn);

console.log(
  `THIS IS FUCKING ${data.someShit.name} WITH ${data.someShit.effect} EFFECT!`
);

mindFuck.addVal();
