import mongoose from "mongoose";

const connectDB = async () => {
  const mUrl =
    "mongodb+srv://hiteshnathani:hiteshnathani@cluster0.znqon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  try {
    await mongoose.connect(mUrl, {
      serverSelectionTimeoutMS: 5000, // Timeout if MongoDB is slow
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default connectDB;
