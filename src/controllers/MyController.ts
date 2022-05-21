import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { MyService } from "../services";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";

/**
 *  @route GET /my/check
 *  @desc READ check over 10
 *  @access Public
 */
const myCheck = async (req: Request, res: Response) => {
    try {
        const data = await MyService.myCheck();

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_MY_CHECK_SUCCESS, data)
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

/**
 *  @route PUT /my/basket
 *  @desc UPDATE all the fruits on tree's onTree to false
 *  @access Public
 */
const miningFruits = async (req: Request, res: Response) => {
    try {
        const data = await MyService.miningFruits();

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.PUT_MY_FRUITS_ON_BASKET_SUCCESS, data)
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
    myCheck,
    miningFruits,
};
