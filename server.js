const http = require("http");
const port = 3000;

const requestHandler = (req, res) => {
  console.log(`New request to: ${req.url}`);
  res.end("Hello, World!");
};

const server = http.createServer(requestHandler);

server.listen(port, () => console.log(`Listening on port ${port}...`));
