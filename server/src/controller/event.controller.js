import express from "express";
import { Event } from "../model/event.model.js";

export const eventRoutes = express.Router();

// ✅ GET all events
eventRoutes.get("/event", async (req, res) => {
  try {
    const events = await Event.find().sort({ dateTime: -1 });
    res.status(200).json({
      success: true,
      message: "All events fetched successfully",
      data: events,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
      error: err.message,
    });
  }
});

// ✅ POST a new event
eventRoutes.post("/event", async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({
        success: false,
        message: "Event not provided",
      });
    }
    const newEvent = new Event(req.body);
    const saved = await newEvent.save();
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: saved,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Event creation failed",
      error: err.message,
    });
  }
});

// ✅ PUT (Update) an event by ID
eventRoutes.put("/event/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update event",
      error: err.message,
    });
  }
});

// ✅ DELETE an event by ID
eventRoutes.delete("/event/:id", async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      data: deleted,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete event",
      error: err.message,
    });
  }
});
