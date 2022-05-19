import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  key: String,
  jwt: String
});

const User = mongoose.model("User", userSchema);

export default User;