// lib/connectDB.js
import mongoose from "mongoose";

const connectDB = async () => {
  const mUrl =
    "mongodb+srv://hiteshnathani:hiteshnathani@cluster0.znqon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }
  console.log("first");
  try {
    await mongoose.connect(mUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectDB;
