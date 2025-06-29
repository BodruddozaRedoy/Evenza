import React from 'react'
import Banner from '../components/Banner'
import EventCategory from '../components/EventCategory'
import Service from '../components/Service'
import Blog from '../components/Blog'
import EventFeatures from '../components/EventFeatures'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <div>
        <Banner/>
      </div>
      <div className='px-40'>
        <EventCategory/>
      </div>
      <div>
        <Service/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <EventFeatures/>
      </div>
      <div>
        <Testimonials/>
      </div>
    </div>
  )
}
