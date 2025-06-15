import resSend from "../../GlobalHandler/respondSend";
import catchAsync from "../../Utils/catchAsync.global";
import { createToken } from "../../Utils/createToken";
import { UserModel } from "../user/user.model";

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.isUserExists(email);

    if (!user) throw new Error("This user does not exist");

    const isPasswordCorrect = await UserModel.isPasswordCorrect(password, user.password);
    if (!isPasswordCorrect) throw new Error("Incorrect password");

    const token = createToken({ email: user.email, id: user._id });

    resSend(res, 200, "User logged in successfully", { token, user });

})

export const authController = {
    login
}