import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO) //!connecting to the mongoDB
  .then(() => {
    console.log("successfully connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
//!creating a middleware(error handler )    action in postman or insomnia
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error😗";
  return res.status(statusCode).json({
    succsess: false,
    statusCode,
    message,
  });
});
//
//
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
