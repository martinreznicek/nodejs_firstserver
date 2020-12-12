//http.js module
var http = require('http');

//this function will be called when request occurs and it will pass the request and create stream to response
http.createServer(function(req, res){
    //first goes head
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');