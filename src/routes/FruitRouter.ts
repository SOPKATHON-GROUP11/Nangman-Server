import { Router } from "express";
import { body } from "express-validator/check";
import { FruitController } from "../controllers";

const router: Router = Router();

router.get("/:fruitId", FruitController.findFruitById);

export default router;
