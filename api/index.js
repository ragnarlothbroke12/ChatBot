import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import projectRouter from './routes/project.route.js';
import agentRouter from './routes/agent.route.js';
import promptRouter from './routes/prompt.route.js';
import chatRouter from './routes/chat.route.js';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB !!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

;


app.use(cookieParser());

app.listen(3000, () => {
  console.log('API server is running on port 3000 !!');
  console.log("API KEY:", process.env.GROQ_API_KEY);
});

console.log("ENV CHECK:", {
  MONGO: process.env.MONGO ? "OK" : "❌",
  JWT: process.env.JWT_SECRET ? "OK" : "❌",
  GROQ: process.env.GROQ_API_KEY ? "OK" : "❌",
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use("/api/agents", agentRouter);
app.use("/api/prompts", promptRouter);
app.use("/api/chat", chatRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

