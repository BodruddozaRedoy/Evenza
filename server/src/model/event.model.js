import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true }, 
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  attendeeCount: { type: Number, default: 0 },
  image: { type: String },
  category: { type: String },
  user: {type: String, required: true},
  attendees: {
    type: [String],
    default: [],
  },
});

export const Event = mongoose.model("Event", eventSchema);
