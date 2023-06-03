import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log("DB connection established");
  } catch (err) {
    console.log("Error during the DB connection", err);
  }
};

export { connectDb };
