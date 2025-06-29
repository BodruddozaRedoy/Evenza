import React from 'react'
import { CgCalendar } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
import Button from './Button'

export default function EventCard({event}) {
  return (
    <div className='shadow-md rounded-md p-3 space-y-4'>
        <img src={event?.image} className='rounded-md h-60 w-full object-cover' alt="" />
        <p className='bg-primary text-white rounded-md p-1 text-xs inline-flex'>{event?.category}</p>
        <h1 className='font-semibold'>{event.title}</h1>
        <div>
            <div className='flex gap-2 items-center'><CiLocationOn/>{event?.location}</div>
            <div className='flex gap-2 items-center'><CgCalendar/>{event?.dateTime}</div>
            <div className='flex gap-2 items-center'><GoPeople/>{event?.attendeeCount}</div>
        </div>
        <button className='py-3 px-5 rounded-md text-white bg-primary w-full text-center cursor-pointer select-none'>Join Event</button>
    </div>
  )
}
