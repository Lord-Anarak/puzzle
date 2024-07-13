import mongoose from "mongoose";

const uri =
  "mongodb+srv://afrar:qweasdzxc@cluster0.dkvenlp.mongodb.net/puzzle?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
