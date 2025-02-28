// Create web server
// 1. Create a web server
// 2. Load the 'fs' module
// 3. Load the 'http' module
// 4. Create a web server object
// 5. Create a server listener
// 6. Create a response
// 7. Read a file
// 8. Respond to a request
// 9. Listen to a port
// 10. Display a message
// 11. Create a server listener

// Load the 'fs' module
var fs = require('fs');

// Load the 'http' module
var http = require('http');

// Create a web server object
var server = http.createServer();

// Create a server listener
server.on('request', function (request, response) {
  // Read a file
  fs.readFile('comment.html', function (error, data) {
    // Respond to a request
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
});

// Listen to a port
server.listen(3000);

// Display a message
console.log('Server is running at http://localhost:3000/');

// Create a server listener
server.on('request', function (request, response) {
  // Respond to a request
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!\n');
});