var input = require("fs").readFileSync("stdin", "utf8");

var raio = parseFloat(input);
var PI = 3.14159;

var volumeEsfera = (4/3) * PI * Math.pow(raio,3);
console.log("VOLUME = " + volumeEsfera(3));