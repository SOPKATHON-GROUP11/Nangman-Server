import { Router } from "express";
import { body } from "express-validator/check";
import { FruitController } from "../controllers";

const router: Router = Router();

router.get("/", FruitController.getFruits);
router.post(
    "/",
    [body("type").notEmpty(), body("contents").notEmpty()],
    FruitController.createFruit
);
router.get("/my/tree", FruitController.getMyFruitsOnTree);
router.get("/my", FruitController.getMyFruits);
router.get("/:fruitId", FruitController.findFruitById);

export default router;
