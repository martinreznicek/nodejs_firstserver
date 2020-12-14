var http = require('http');
var fs = require('fs');

var obj = require('./data.json') 

http.createServer(function(req, res){
    //res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if (req.url === '/'){
        fs.createReadStream(__dirname + '/index.html')
        .pipe(res); 
    }
    else if (req.url === '/api'){   
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');