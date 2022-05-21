import Fruit from "../models/Fruit";
import { FruitResponseDto } from "../interfaces/fruit/FruitResponseDto";
import { FruitMyResponseDto } from "../interfaces/fruit/FruitMyResponseDto";
import mongoose, { isValidObjectId } from "mongoose";

const id = "6288fdbb4c7da258ef44a298";

const getFruits = async (): Promise<FruitResponseDto[]> => {
    try {
        const fruits = await Fruit.find().populate(
            "userId",
            "userNickname userProfileImageUrl"
        );

        const data = await Promise.all(
            fruits.map(async (fruit: any) => {
                const result = {
                    fruitId: fruit._id,
                    userNickname: fruit.userId.userNickname,
                    userProfileImageUrl: fruit.userId.userProfileImageUrl,
                    type: fruit.type,
                    contents: fruit.contents,
                    wateringCount: fruit.wateringCount,
                    createdAt: fruit.createdAt,
                    updatedAt: fruit.updatedAt,
                };

                return result;
            })
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const findFruitById = async (
    fruitId: string
): Promise<FruitResponseDto | null> => {
    try {
        const fruit = await Fruit.findById(fruitId).populate(
            "userId",
            "userNickname userProfileImageUrl"
        );

        if (!fruit) {
            return null;
        }

        // TODO: 코드 수정이 필요합니다
        const result = {
            fruitId: (fruit as any)._id,
            userNickname: (fruit as any).userId.userNickname,
            userProfileImageUrl: (fruit as any).userId.userProfileImageUrl,
            type: (fruit as any).type,
            contents: (fruit as any).contents,
            wateringCount: (fruit as any).wateringCount,
            createdAt: (fruit as any).createdAt,
            updatedAt: (fruit as any).updatedAt,
        };

        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getMyFruitsOnTree = async (): Promise<FruitMyResponseDto[] | null> => {
    try {
        const fruits = await Fruit.find({
            userId: id,
            onTree: true,
        });

        const data = await Promise.all(
            fruits.map(async (fruit: any) => {
                const result = {
                    fruitId: fruit._id,
                    type: fruit.type,
                    contents: fruit.contents,
                    wateringCount: fruit.wateringCount,
                    createdAt: fruit.createdAt,
                    updatedAt: fruit.updatedAt,
                };

                return result;
            })
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getMyFruits = async (): Promise<FruitMyResponseDto[]> => {
    try {
        const fruits = await Fruit.find({
            userId: id,
        });

        const data = await Promise.all(
            fruits.map(async (fruit: any) => {
                const result = {
                    fruitId: fruit._id,
                    type: fruit.type,
                    contents: fruit.contents,
                    wateringCount: fruit.wateringCount,
                    createdAt: fruit.createdAt,
                    updatedAt: fruit.updatedAt,
                };

                return result;
            })
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const putWateringCount = async (fruitId: string) => {
    try {
        const fruit = await Fruit.findById(fruitId);

        if (!fruit) {
            return null;
        }

        const wateringCount = fruit.wateringCount + 1;

        await Fruit.findByIdAndUpdate(fruitId, {wateringCount : wateringCount});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    getFruits,
    findFruitById,
    getMyFruitsOnTree,
    getMyFruits,
    putWateringCount,
};
