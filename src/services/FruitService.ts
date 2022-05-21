import { FruitResponseDto } from "../interfaces/fruit/FruitResponseDto";
import Fruit from "../models/Fruit";

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

export default {
    getFruits,
};