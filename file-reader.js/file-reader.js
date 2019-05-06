
/* examples
var fs = require("fs");

var filePath = "./test_sync.txt";
var fileData = "Testing synchronous file write.\n";

fs.writeFileSync(filePath, fileData, {encoding: 'utf8'});
console.log("successfully wrote to", filePath);

fs.readFile(filePath, {encoding: 'utf8'}, function(err,data){console.log(data)});
*/
var fs = require("fs");

var filePath = process.argv[2];
fs.readFile(filePath, {encoding: 'utf8'}, function(err,data){console.log(data)});
