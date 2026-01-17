import express from "express";
import { getDashboardStats } from "../controller/dashboard.contrpller.js";
import {verifyToken} from "../utils/verifyToken.js";

const router = express.Router();

router.get("/stats", verifyToken, getDashboardStats);

export default router;
