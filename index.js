const http = require("http");
const path = require("path");

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
});

server.listen(PORT);
