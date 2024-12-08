const expres = require("express");
const _ = expres.Router();

_.get("/api/v1/sh", (req, res) => {
  res.end("Hello, World!");
});

_.get("/api/v1/hello", (req, res) => {
  res.send("Hello Ahnaf");
});

module.exports = _;
