import React, { useContext, useEffect, useState } from "react";
import useAllEvents from "../hooks/useAllEvents";
import dayjs from "dayjs";
import { axiosPublic } from "../utils/axiosPublic";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'

export default function MyEvent() {
  const { events } = useAllEvents();
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    if (events && user?.email) {
      const filtered = events.filter((ev) => ev.user === user.email);
      setMyEvents(filtered);
    }
  }, [events, user]);

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

  const closeModal = () => setEditingEvent(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingEvent) return;

    try {
      const res = await axiosPublic.put(`/event/${editingEvent._id}`, formData);
      if (res.data.success) {
        const updated = res.data.data;
        toast.success("Updated");
        setMyEvents((prev) =>
          prev.map((ev) => (ev._id === updated._id ? updated : ev))
        );
        closeModal();
      }
    } catch (err) {
      console.error("Update failed:", err.message);
    }
  };

  const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Do you want to delete this event?",
    text: "This action cannot be undone.",
    icon: "warning",
    showDenyButton: true,
    confirmButtonColor: "#d33",
    denyButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
    denyButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      const res = await axiosPublic.delete(`/event/${id}`);
      if (res.data.success) {
        toast.success("Event deleted successfully!");
        setMyEvents((prev) => prev.filter((ev) => ev._id !== id));
      }
    } catch (err) {
      console.error("Delete failed:", err.message);
      toast.error("Failed to delete event.");
    }
  } else if (result.isDenied) {
    Swal.fire("Deletion cancelled", "", "info");
  }
};


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Events</h1>

      {myEvents.length === 0 ? (
        <p className="text-center text-gray-500">
          You have not added any events yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myEvents.map((event) => (
            <div
              key={event._id}
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
              <p className="mt-3 font-semibold">
                Attendees: {event.attendeeCount}
              </p>

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
