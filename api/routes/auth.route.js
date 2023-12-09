import express from "express";
import { signUp } from "../controller/auth.controler.js";
const route = express();
route.post("/signup", signUp);

export default route;
