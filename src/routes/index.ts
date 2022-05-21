//router index file
import { Router } from "express";
import FruitRouter from "./FruitRouter";
import MyRouter from "./MyRouter";

const router: Router = Router();

router.use("/fruit", FruitRouter);
router.use("/my", MyRouter);

export default router;
