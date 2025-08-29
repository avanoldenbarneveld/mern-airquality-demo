import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("[db] connected to MongoDB Atlas");
  } catch (err) {
    console.error("[db] connection error:", err.message);
    process.exit(1);
  }
}
