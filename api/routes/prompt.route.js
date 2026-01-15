import express from "express";
import {
  createPrompt,
  getPromptsByAgent,
  deletePrompt,
} from "../controller/prompt.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createPrompt);
router.get("/agent/:agentId", verifyToken, getPromptsByAgent);
router.delete("/:id", verifyToken, deletePrompt);

export default router;
