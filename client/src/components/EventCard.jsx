import React, { useState } from 'react'
import { CgCalendar } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
import dayjs from 'dayjs'
import { axiosPublic } from '../utils/axiosPublic'
import toast from 'react-hot-toast'

export default function EventCard({ event }) {
  const [attendees, setAttendees] = useState(event?.attendeeCount || 0)

  const handleJoin = async () => {
    try {
      const res = await axiosPublic.put(`/event/${event._id}`, {
        attendeeCount: attendees + 1,
      })

      if (res.data.success) {
        setAttendees(prev => prev + 1)
        toast.success("You have joined the event!")
      } else {
        toast.error("Failed to join event")
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong!")
    }
  }

  return (
    <div className='shadow-md rounded-md p-3 space-y-4'>
      <img src={event?.image} className='rounded-md h-60 w-full object-cover' alt="" />
      
      <p className='bg-primary text-white rounded-md p-1 text-xs inline-flex'>{event?.category}</p>
      
      <h1 className='font-semibold text-lg'>{event.title}</h1>
      
      <div className='space-y-1 text-sm text-gray-600'>
        <div className='flex gap-2 items-center'>
          <CiLocationOn className='text-xl' />
          {event?.location}
        </div>

        <div className='flex gap-2 items-center'>
          <CgCalendar className='text-xl' />
          {dayjs(event?.dateTime).format("MMM D, YYYY - h:mm A")}
        </div>

        <div className='flex gap-2 items-center'>
          <GoPeople className='text-xl' />
          {attendees} Attending
        </div>
      </div>

      <button
        onClick={handleJoin}
        className='py-3 px-5 rounded-md text-white bg-primary w-full text-center cursor-pointer select-none'
      >
        Join Event
      </button>
    </div>
  )
}
