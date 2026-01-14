import express from 'express';
import { Test } from '../controller/user.controller.js';

const router = express.Router();

// Define user-related routes here

router.get('/test', Test);

export default router;