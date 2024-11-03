import mongoose from "mongoose";

const connectMongoDb= async() => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;