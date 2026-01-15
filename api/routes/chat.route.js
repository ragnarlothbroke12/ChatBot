import express from "express";
import { sendMessage } from "../controller/chat.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/send", verifyToken, sendMessage);

export default router;
