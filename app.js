//http.js module
var http = require('http');
var fs = require('fs');

//this function will be called when request occurs and it will pass the request and create stream to response
http.createServer(function(req, res){
    //first goes head
    res.writeHead(200, { 'Content-Type': 'text/html' });
    html = fs.readFileSync(__dirname + '/index.html')
    res.end(html);

}).listen(1337, '127.0.0.1');