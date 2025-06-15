import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "./catchAsync.global";
import config from "../config";
import { UserModel } from "../models/user/user.model";

const auth = () => {
    return catchAsync(async (req, res, next) => {
        // const token = req.cookies.token;
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            throw new Error("Please log in !")
        }

        const decode = jwt.verify(token, config.jwtSecret as string)

        const { email, iat } = decode as JwtPayload

        const user = await UserModel.isUserExists(email)

        if (!user) {
            throw new Error("This user not exists")
        }

        if (user.passwordChangedAt && UserModel.isJWTIssuedbeforePassword(user.passwordChangedAt, iat as number)) {
            throw new Error("Token Expired !!")
        }

        res.locals.user = { email, id: user._id };

        next();
    })
}

export default auth;