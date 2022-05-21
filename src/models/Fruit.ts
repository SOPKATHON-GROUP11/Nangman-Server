import mongoose, { Mongoose } from "mongoose";
import { FruitInfo } from "../interfaces/fruit/FruitInfo";

const FruitSchema = new mongoose.Schema({
    type: {
        type: Number,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    wateringCount: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    onTree: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true
});

export default mongoose.model<FruitInfo & mongoose.Document>("Fruit", FruitSchema);