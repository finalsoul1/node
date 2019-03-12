/* Hello World in NodeJS */
console.log('Hello, World!');

var http = require('http');

http.createServer(function (req, res) {
    /*
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // response body
    res.end('Hello World\n');
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");
