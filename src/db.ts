import mongoose from "mongoose";
import { URI } from "./config";
// import dotenv from "dotenv";

// dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
