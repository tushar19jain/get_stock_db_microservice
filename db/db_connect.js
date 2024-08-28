import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://tushar:tushar@sma.p0uwr.mongodb.net/?retryWrites=true&w=majority&appName=SMA"
    );
    //console.log(connection);
  } catch (error) {
    console.log(error);
  }
};
