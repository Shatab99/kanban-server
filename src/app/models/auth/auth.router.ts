import { Router } from "express";
import { authController } from "./auth.controller";
import validate from "../../Utils/validation.middleware";
import { loginValidation } from "./auth.validation";

const router = Router()

router.post("/login",validate(loginValidation), authController.login)


export const authRouter = router;