var http = require('http');
var fs = require('fs');

var obj = require('./data.json') 

http.createServer(function(req, res){
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    //fs.createReadStream(__dirname + '/index.html').pipe(res); 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');