import mongoose from "mongoose";
import { FruitCreateDto } from "./FruitCreateDto";

export interface FruitResponseDto extends FruitCreateDto {
    _id: mongoose.Schema.Types.ObjectId;
}
