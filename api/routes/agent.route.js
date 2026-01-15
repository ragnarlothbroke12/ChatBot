import express from "express";
import {
  createAgent,
  getAgentsByProject,
  updateAgent,
  deleteAgent,
} from "../controller/agent.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createAgent);
router.get("/project/:projectId", verifyToken, getAgentsByProject);
router.put("/:id", verifyToken, updateAgent);
router.delete("/:id", verifyToken, deleteAgent);

export default router;
