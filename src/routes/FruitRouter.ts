import { Router } from "express";
import { body } from "express-validator/check";
import { FruitController } from "../controllers";

const router: Router = Router();

router.get("/", FruitController.getFruits);
router.get("/my/tree", FruitController.getMyFruitsOnTree);
router.get("/my", FruitController.getMyFruits);
router.get("/:fruitId", FruitController.findFruitById);
router.put("/:fruitId/water", FruitController.putWateringCount);

export default router;
