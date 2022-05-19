const express = require("express");
const path = require("path");
const getHtmlWithDecorator = require("./dekorator");
const basePath = "/person/ettersende";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();

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

server.get(`/saksoversikt`, (req, res) => {
  res.status(301).redirect(process.env.TMS_ETTERSENDE_URL);
});

server.get(`/saksoversikt/ettersending`, (req, res) => {
  res.status(301).redirect(process.env.TMS_ETTERSENDE_URL);
});

server.get(`/saksoversikt/app/ettersending`, (req, res) => {
  res.status(301).redirect(process.env.TMS_ETTERSENDE_URL);
});

// Match everything except internal, static and saksoversikt
server.use(/^(?!.*\/(internal|static|saksoversikt)\/).*$/, (req, res) =>
  getHtmlWithDecorator(`${buildPath}/index.html`)
    .then((html) => {
      res.send(html);
    })
    .catch((e) => {
      res.status(500).send(e);
    })
);

server.listen(3000, () => console.log("Server listening on port 3000"));
