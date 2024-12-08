const { Dbconnect } = require("./src/Database/index");
require("dotenv").config();
const { app } = require("./app");

Dbconnect()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server Running on port 3000");
    });
  })
  .catch((err) => {
    console.log("From index.js file database connection error", err);
  });
