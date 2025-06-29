import React, { useState } from "react";
import dayjs from "dayjs";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    dateTime: "",
    location: "",
    description: "",
    attendeeCount: 0,
    image: "",
    category: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const { title, name, dateTime, location, description, category } = formData;
    if (!title || !name || !dateTime || !location || !description || !category) {
      return setError("Please fill in all fields.");
    }
    setError("");

    // You can send it to your backend or update global state
    console.log("Event Submitted:", formData);

    // Reset
    setFormData({
      title: "",
      name: "",
      dateTime: "",
      location: "",
      description: "",
      attendeeCount: 0,
      image: "",
      category: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-xl shadow">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />

        <input
          type="text"
          name="name"
          placeholder="Organizer Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />

        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        >
          <option value="">Select Category</option>
          <option>Music & Concerts</option>
          <option>Tech & Hackathons</option>
          <option>Workshops & Seminars</option>
          <option>Sports & Fitness</option>
        </select>

        <textarea
          name="description"
          placeholder="Event Description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        ></textarea>

        <input
          type="url"
          name="image"
          placeholder="Image URL (optional)"
          value={formData.image}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md focus:outline-none"
        />

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md hover:bg-opacity-90 transition"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}
