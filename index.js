const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  const PATH = req.url;
  console.log(PATH);
  fs.readFile(path.join(__dirname, "public", `${PATH}.html`), (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write(data);
    return res.end(PATH);
  });
});

server.listen(PORT);
