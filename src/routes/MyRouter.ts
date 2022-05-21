import { Router } from "express";
import { body } from "express-validator/check";
import { MyController } from "../controllers";

const router: Router = Router();

router.get("/check", MyController.myCheck);
router.put("/basket", MyController.miningFruits);

export default router;
