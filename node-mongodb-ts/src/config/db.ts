import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/node-mongodb-js" as string);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
