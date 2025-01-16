// Create web server
// Create a web server that listens to the port 3000 and sends "Hello World" as the response.

// Require the 'http' module
const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World');
});

// Listen to the port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server is running at http://localhost:3000/');
});