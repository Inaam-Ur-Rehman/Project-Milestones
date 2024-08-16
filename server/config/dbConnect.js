import mongoose from "mongoose";
import dotenv from "dotenv";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connected = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${connected.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    ProcessingInstruction.exit(1);
  }
};

export default dbConnect;
