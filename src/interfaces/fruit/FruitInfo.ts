import mongoose from "mongoose";

export interface FruitInfo {
    type: number;
    contents: string;
    wateringCount: number;
    userId: mongoose.Types.ObjectId | string;
    onTree: boolean;
}