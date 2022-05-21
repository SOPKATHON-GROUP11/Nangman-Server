//router index file
import { Router } from "express";
import FruitRouter from "./FruitRouter";

const router: Router = Router();

router.use("/fruit", FruitRouter);

export default router;
