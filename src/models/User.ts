import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
    userNickname: {
        type: String,
        required: true
    },
    userProfileImageUrl: {
        type: String,
        required: true
    }
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);