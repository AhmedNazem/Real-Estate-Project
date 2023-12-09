import mongoose from "mongoose"; //!Ccreating the database schema for the user account
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } //!for updating purposes asssending or descending
);
const User = mongoose.model("User", userSchema);

export default User;
