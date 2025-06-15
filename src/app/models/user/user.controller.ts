import resSend from "../../GlobalHandler/respondSend";
import catchAsync from "../../Utils/catchAsync.global";
import { UserModel } from "./user.model";

const getme = catchAsync(async (req, res) => {
    const { email } = res.locals.user;

    const user = await UserModel.isUserExists(email);

    resSend(res, 200, "the user fetched successfully", user)
})

const createUser = catchAsync(async (req, res) => {
    const data = req.body;
    await UserModel.create(data)
    resSend(res, 201, "User created successfully", {})
})


export const userController = {
    getme,
    createUser
}