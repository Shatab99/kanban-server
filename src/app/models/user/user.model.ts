import { Model, model, Schema } from "mongoose";
import bcrypt from 'bcrypt'

export type TUser = {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    passwordChangedAt?: Date;
};

export interface User extends Model<TUser> {
    isUserExists(email: string): Promise<TUser>
    isPasswordCorrect(plain: string, hash: string): Promise<boolean>
    isUserWarned(email: string): Promise<boolean>
    isJWTIssuedbeforePassword(passwordChangeTime: Date, jwtIssuedTime: number): boolean;
}


const userSchema = new Schema<TUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    passwordChangedAt: { type: Date, default: null }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.password === 'ByGoogle') return next();
    user.password = await bcrypt.hash(user.password, 10)
    next();
})

userSchema.statics.isUserExists = async function (email: string) {
    return await UserModel.findOne({ email })
}

userSchema.statics.isPasswordCorrect = async function (plain: string, hash: string) {
    return await bcrypt.compare(plain, hash)
}

userSchema.statics.isJWTIssuedbeforePassword = function (passwordChangeTime: Date, jwtIssuedTime: number) {
    const passChangeTime = new Date(passwordChangeTime).getTime() / 1000;
    return passChangeTime > jwtIssuedTime;
}


export const UserModel = model<TUser, User>("User", userSchema);