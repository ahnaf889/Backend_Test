const express = require("express");
const app = express();

app.get("/api/v1/data", (req, res) => {
  res.json({
    name: "Ahnaf-dev",
    age: 20,
  });
});

module.exports = { app };
