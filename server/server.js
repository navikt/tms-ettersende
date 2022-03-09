const express = require("express");
const cors = require("cors");
const path = require("path");
const getHtmlWithDecorator = require("./dekorator");
const basePath = "/tms-ettersendelse-fallback-vitejs";
const buildPath = path.resolve(__dirname, "../");
const server = express();

server.use(cors({ origin: "http://localhost:3001" }));

server.use(
  basePath,
  express.static(buildPath, {
    index: false,
  })
);

server.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

// Match everything except internal og static
server.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) =>
  getHtmlWithDecorator(`${buildPath}/index.html`)
    .then((html) => {
      res.send(html);
    })
    .catch((e) => {
      res.status(500).send(e);
    })
);

server.listen(3001, () => console.log("Server listening on port 3001"));
