import express from "express";
import { text } from "../controller/user.controller.js";
const router = express.Router();
router.get("/test", text);
export default router;
