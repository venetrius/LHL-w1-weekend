var https = require("https");

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};


// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
  var numberOfChunks = 0;
  response.on('data', function(chunk) {
    numberOfChunks++;
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
      console.log("number of chunks", numberOfChunks);
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");
