import express from "express";
import {
  createConversation,
  getUserConversations,
  getConversationById
} from "../controller/conversation.controller.js";

import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createConversation);
router.get("/", verifyToken, getUserConversations);
router.get("/:id", verifyToken, getConversationById);

export default router;
