//http.js module
var http = require('http');
var fs = require('fs');

//this function will be called when request occurs and it will pass the request and create stream to response
http.createServer(function(req, res){
    //first goes head
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    var name = 'Martin';
    //we pull a content from a file (index.html) and manipulate that
    html = html.replace('{name}', name);
    res.end(html);

}).listen(1337, '127.0.0.1');