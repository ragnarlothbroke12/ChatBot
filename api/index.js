import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // ✅ add this

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import projectRouter from './routes/project.route.js';
import agentRouter from './routes/agent.route.js';
import promptRouter from './routes/prompt.route.js';
import chatRouter from './routes/chat.route.js';
import dashboardRouter from './routes/dashboard.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => console.log('Connected to MongoDB !!'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.listen(3000, () => {
  console.log('API server is running on port 3000 !!');
});

// Routers
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);
app.use('/api/agents', agentRouter);
app.use('/api/prompts', promptRouter);
app.use('/api/chat', chatRouter);
app.use("/api/dashboard", dashboardRouter);

// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
