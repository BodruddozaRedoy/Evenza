import express from 'express'
import cors from 'cors'
import { eventRoutes } from './controller/event.controller.js';
import { authRoutes } from './controller/user.controller.js';

export const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", eventRoutes);
app.use("/api", authRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Event Management API is running!");
});


