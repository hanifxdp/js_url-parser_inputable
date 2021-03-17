const prompt = require("prompt-sync")();
var url = require("url");

const websites = prompt("Enter URL here: ");
console.log(`this is your url:  ${websites}`);

var myURL = url.parse(websites, true);

console.log("protocol:" + myURL.protocol);
console.log("hostname:" + myURL.hostname);
console.log("pathname:" + myURL.pathname);
console.log("search:" + myURL.search);
console.log("hash:" + myURL.hash);
