import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controller/project.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createProject);
router.get("/", verifyToken, getProjects);
router.get("/:id", verifyToken, getProjectById);
router.put("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);

export default router;
