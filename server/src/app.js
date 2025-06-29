import express from 'express'
import cors from 'cors'
import { eventRoutes } from './controller/event.controller.js';

export const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", eventRoutes);

// Root
app.get("/", (req, res) => {
  res.send("Event Management API is running!");
});


