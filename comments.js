// Create web server 
// 1. Create a web server
// 2. Add a route for the home page
// 3. Add a route for the comments page
// 4. Start the server

// 1. Create a web server
var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {

    // 2. Add a route for the home page
    if (request.url === "/") {
        fs.readFile("index.html", function(err, data) {
            response.end(data);
        });
    }

    // 3. Add a route for the comments page
    else if (request.url === "/comments") {
        fs.readFile("comments.html", function(err, data) {
            response.end(data);
        });
    }

    // 4. Start the server
}).listen(8080);