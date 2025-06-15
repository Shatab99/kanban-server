import jwt from "jsonwebtoken";
import config from "../config";

export const createToken = (user: { email: string; id: string }) => {

    const token = jwt.sign(
        { email: user.email, id: user.id },
        config.jwtSecret as string,
        { expiresIn: "10d" }
    );

    return token;
}