import mongoose from "mongoose";
import config from "../config";
import Fruit from "../models/Fruit";
import User from "../models/User";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set("autoCreate", true);

        console.log("Mongoose Connected ...");

        User.createCollection().then(function (collection) {
            console.log("User Collection is created!");
        });
      
        Fruit.createCollection().then(function (collection) {
            console.log("Fruit Collection is created!");
        });
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
