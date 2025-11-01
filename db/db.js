import mongoose from "mongoose";

const connectToDb = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB:", err);
    });
};

export default connectToDb;
