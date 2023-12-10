import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body; //!Destructring the parameters
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "user created sucessfully " }); //!201 meaning we creating somthing new the action
    //! of this message will be in the postman  or in insomnia app
  } catch (err) {
    next(err);
  }
};
