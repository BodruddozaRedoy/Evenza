import React, { useEffect, useState } from 'react';
import useAllEvents from '../hooks/useAllEvents';
import EventCard from './EventCard';

const categories = [
  { title: 'All' },
  { title: 'Music & Concerts' },
  { title: 'Tech & Hackathons' },
  { title: 'Workshops & Seminars' },
  { title: 'Sports & Fitness' },
];

export default function EventCategory() {
  const { events } = useAllEvents();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredEvents(events || []);
    } else {
      const filtered = events?.filter(event => event.category === selectedCategory);
      setFilteredEvents(filtered || []);
    }
  }, [selectedCategory, events]);

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold">Browse Events by Category</h1>
      <p className="text-gray-400 md:w-2/4 text-center">
        Find events that match your interests — whether it's tech, music, sports, or more. Explore curated categories to easily discover events you'll love.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        {categories.map((cat, index) => (
          <p
            key={index}
            onClick={() => setSelectedCategory(cat.title)}
            className={`font-bold py-1 px-4 rounded-md cursor-pointer select-none transition ${
              selectedCategory === cat.title ? 'bg-primary text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {cat.title}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No events found in this category.</p>
        )}
      </div>
    </div>
  );
}
