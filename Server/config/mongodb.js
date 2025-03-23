import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database is connected")
  );
  await mongoose.connect(`${process.env.MONGODB_URL}/uas`);
};

export default connectDB;
