import Fruit from "../models/Fruit";
import { FruitResponseDto } from "../interfaces/fruit/FruitResponseDto";

const findFruitById = async (
    fruitId: string
): Promise<FruitResponseDto | null> => {
    try {
        const fruit = await Fruit.findById(fruitId);

        if (!fruit) {
            return null;
        }

        return fruit;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    findFruitById,
};
