import express from "express";
import { sendMessage, getOrCreateChat } from "../controller/chat.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/send", verifyToken, sendMessage);
router.get("/get/:agentId", verifyToken, getOrCreateChat);


export default router;
