import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error occured while connecting to database");
    });
};