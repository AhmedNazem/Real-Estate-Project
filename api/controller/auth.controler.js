import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created sucessfully " }); //!201 meaning we creating somthing new the action
    //! of this message will be in the postman app
  } catch (err) {
    res.status(500).json(err.message);
  }
};
