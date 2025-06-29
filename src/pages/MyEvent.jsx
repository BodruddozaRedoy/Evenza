import React, { useEffect, useState } from "react";
import useAllEvents from "../hooks/useAllEvents";
import dayjs from "dayjs";

export default function MyEvent({ userName }) {
  const { events } = useAllEvents();
  const [myEvents, setMyEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    dateTime: "",
    location: "",
    description: "",
    category: "",
    image: "",
  });

  // Filter events by current user
  useEffect(() => {
    if (events && userName) {
      const filtered = events.filter((ev) => ev.name === userName);
      setMyEvents(filtered);
    }
  }, [events, userName]);

  // Open edit modal and fill form data
  const openEditModal = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      dateTime: event.dateTime,
      location: event.location,
      description: event.description,
      category: event.category || "",
      image: event.image || "",
    });
  };

  // Close modal
  const closeModal = () => {
    setEditingEvent(null);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update event in local state (replace with API call)
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editingEvent) return;

    const updatedEvent = {
      ...editingEvent,
      ...formData,
    };

    setMyEvents((prev) =>
      prev.map((ev) => (ev._id === editingEvent._id ? updatedEvent : ev))
    );
    closeModal();
  };

  // Delete event with confirmation
  const handleDelete = (id) => {
    if (!id) return;
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      setMyEvents((prev) => prev.filter((ev) => ev._id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Events</h1>

      {myEvents.length === 0 ? (
        <p className="text-center text-gray-500">You have not added any events yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myEvents.map((event) => (
            <div
              key={event._id || event.title}
              className="bg-white rounded-lg shadow p-5 flex flex-col"
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}
              <h2 className="text-xl font-semibold mb-1">{event.title}</h2>
              <p className="text-gray-600 mb-1">By: {event.name}</p>
              <p className="text-gray-600 mb-1">
                {dayjs(event.dateTime).format("MMM D, YYYY - h:mm A")}
              </p>
              <p className="text-gray-600 mb-3">{event.location}</p>
              <p className="text-gray-700 flex-grow">{event.description}</p>
              <p className="mt-3 font-semibold">Attendees: {event.attendeeCount}</p>

              <div className="mt-4 flex gap-3 justify-end">
                <button
                  onClick={() => openEditModal(event)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {editingEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Update Event</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Event Title"
                required
              />
              <input
                type="datetime-local"
                name="dateTime"
                value={dayjs(formData.dateTime).format("YYYY-MM-DDTHH:mm")}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Location"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select Category</option>
                <option>Music & Concerts</option>
                <option>Tech & Hackathons</option>
                <option>Workshops & Seminars</option>
                <option>Sports & Fitness</option>
              </select>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Description"
                required
              ></textarea>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                placeholder="Image URL (optional)"
              />

              <div className="flex justify-end gap-3 mt-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
