const mongoose = require("mongoose");

const Dbconnect = async () => {
  try {
    const databaseInstance = await mongoose.connect(
      "mongodb+srv://ahnaf696dev:flPT1IOu7coGwAcQ@cluster0.g7urc.mongodb.net/ahnaf-dev"
    );
    if (databaseInstance) {
      console.log("Database connection Done");
    }
  } catch (error) {
    console.log("From mongoDb database connection error:", error);
  }
};

module.exports = { Dbconnect };
