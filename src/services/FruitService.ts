import Fruit from "../models/Fruit";
import { FruitResponseDto } from "../interfaces/fruit/FruitResponseDto";

const findFruitById = async (
    fruitId: string
): Promise<FruitResponseDto | null> => {
    try {
        const fruit = await Fruit.findById(fruitId)
            .populate(
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

export default {
    findFruitById,
};
