import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { FruitService } from "../services";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";


/**
 *  @route GET /fruit/:fruitId
 *  @desc READ Fruit
 *  @access Public
 */
const findFruitById = async (req: Request, res: Response) => {
    const { fruitId } = req.params;

    try {
        const data = await FruitService.findFruitById(fruitId);

        if (!data) {
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_FRUIT_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

export default {
    findFruitById,
};
