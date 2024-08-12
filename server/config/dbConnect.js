import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connected = mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${(await connected).connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    ProcessingInstruction.exit(1);
  }
};

export default dbConnect;
