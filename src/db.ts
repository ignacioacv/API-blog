import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://legalle:9053DAF9@cluster0.32uokwb.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
