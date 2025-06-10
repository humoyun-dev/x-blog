import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    password: String,
    profileImage: String,

    resetToken: String,
    resetTokenExpires: Date,
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
