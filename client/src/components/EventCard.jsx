import React, { useContext, useState } from "react";
import { CgCalendar } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import dayjs from "dayjs";
import { axiosPublic } from "../utils/axiosPublic";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

export default function EventCard({ event }) {
  const { user } = useContext(AuthContext);
  const [attendees, setAttendees] = useState(event?.attendeeCount || 0);
  const [joined, setJoined] = useState(event?.attendees?.includes(user?.email));

  const handleJoin = async () => {
    if (!user?.email) {
      toast.error("Please login to join this event.");
      return;
    }

    if (joined) {
      toast.error("You've already joined this event.");
      return;
    }

    try {
      const res = await axiosPublic.post(`/event/join/${event._id}`, {
        email: user.email,
      });

      if (res.data.success) {
        setAttendees((prev) => prev + 1);
        setJoined(true);
        toast.success("You have joined the event!");
      } else {
        toast.error(res.data.message || "Failed to join event");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="shadow-md rounded-md p-3 space-y-4">
      <img
        src={event?.image}
        className="rounded-md h-60 w-full object-cover"
        alt=""
      />

      <p className="bg-primary text-white rounded-md p-1 text-xs inline-flex">
        {event?.category}
      </p>

      <div>
        <h1 className="font-semibold text-lg">{event.title}</h1>
        <p className="flex items-center"><img className="w-7" src="https://img.icons8.com/?size=100&id=lK2ozrm8ZFxs&format=png&color=000000" alt="" /> {event?.name}</p>
      </div>

      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex gap-2 items-center">
          <CiLocationOn className="text-xl" />
          {event?.location}
        </div>

        <div className="flex gap-2 items-center">
          <CgCalendar className="text-xl" />
          {dayjs(event?.dateTime).format("MMM D, YYYY - h:mm A")}
        </div>

        <div className="flex gap-2 items-center">
          <GoPeople className="text-xl" />
          {attendees} Attending
        </div>
      </div>

      <hr className="text-primary"/>
      <p className="font-semibold text-gray-400">{event?.description}</p>

      <button
        onClick={handleJoin}
        disabled={joined}
        className={`py-3 px-5 rounded-md w-full text-center cursor-pointer select-none ${
          joined
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-dark"
        }`}
      >
        {joined ? "Already Joined" : "Join Event"}
      </button>
    </div>
  );
}
