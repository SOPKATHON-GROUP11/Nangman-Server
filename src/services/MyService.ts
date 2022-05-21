import mongoose from "mongoose";
import Fruit from "../models/Fruit";
import { FruitResponseDto } from "../interfaces/fruit/FruitResponseDto";
import { MyCheckResponseDto } from "../interfaces/my/MyCheckResponseDto";

const id = ["6288fdbb4c7da258ef44a298"];

const myCheck = async (): Promise<MyCheckResponseDto> => {
    try {
        const fruits = await Fruit.find().where("userId").in(id).exec();

        let data = [];
        await Promise.all(
            fruits.map(async (fruit: any) => {
                if (fruit.onTree) {
                    data.push(fruit);
                }
            })
        );

        let result: MyCheckResponseDto;
        if (data.length >= 10) {
            result = {
                isOver: true,
            };
        } else {
            result = {
                isOver: false,
            };
        }

        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    myCheck,
};
