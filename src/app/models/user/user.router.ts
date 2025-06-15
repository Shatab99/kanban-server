import { Router } from "express";
import { userController } from "./user.controller";
import validate from "../../Utils/validation.middleware";
import { createUserValidation } from "./user.validation";
import auth from "../../Utils/auth.middleware";

const router = Router()

router.get("/getme", auth(), userController.getme)
router.post("/create", validate(createUserValidation), userController.createUser)


export const userRouter = router