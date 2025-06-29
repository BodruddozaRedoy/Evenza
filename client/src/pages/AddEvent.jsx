import React, { useContext, useState } from "react";
import axios from "axios";
import { axiosPublic } from "../utils/axiosPublic";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function AddEvent() {
  const {user} = useContext(AuthContext)
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
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, name, dateTime, location, description, category } = formData;
    if (!title || !name || !dateTime || !location || !description || !category) {
      setSuccess("");
      return setError("Please fill in all required fields.");
    }

    try {
      const data = {
        ...formData,
        user: user?.email
      }
      const res = await axiosPublic.post("/event", data);
      if (res.data.success) {
        toast.success("Event added successfully!")
        setSuccess("Event added successfully!");
        setError("");
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
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setSuccess("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-xl shadow">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

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
