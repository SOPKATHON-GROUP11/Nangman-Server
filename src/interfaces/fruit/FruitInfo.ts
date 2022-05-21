import mongoose from "mongoose";

export interface FruitInfo {
    type: string;
    contents: string;
    wateringCount: number;
    userId: mongoose.Types.ObjectId | string;
    onTree: boolean;
}