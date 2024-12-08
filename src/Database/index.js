const mongoose = require("mongoose");

const Dbconnect = async () => {
  try {
    const databaseInstance = await mongoose.connect(process.env.DATABASE_URL);
    if (databaseInstance) {
      console.log("Database connection Done");
    }
  } catch (error) {
    console.log("From mongoDb database connection error:", error);
  }
};

module.exports = { Dbconnect };
