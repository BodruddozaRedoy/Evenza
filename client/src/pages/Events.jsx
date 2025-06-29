import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import useAllEvents from '../hooks/useAllEvents';
import EventCard from '../components/EventCard';

export default function Events() {
  const { events } = useAllEvents();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    let filtered = events;

    // 🔍 Search by title
    if (search.trim()) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🗓️ Filter by date
    const now = dayjs();
    if (filter === 'Today') {
      filtered = filtered.filter((event) =>
        dayjs(event.dateTime).isSame(now, 'day')
      );
    } else if (filter === 'Current Week') {
      filtered = filtered.filter((event) =>
        dayjs(event.dateTime).isAfter(now.startOf('week')) &&
        dayjs(event.dateTime).isBefore(now.endOf('week'))
      );
    } else if (filter === 'Last Week') {
      const lastWeekStart = now.subtract(1, 'week').startOf('week');
      const lastWeekEnd = now.subtract(1, 'week').endOf('week');
      filtered = filtered.filter((event) =>
        dayjs(event.dateTime).isAfter(lastWeekStart) &&
        dayjs(event.dateTime).isBefore(lastWeekEnd)
      );
    } else if (filter === 'Current Month') {
      filtered = filtered.filter((event) =>
        dayjs(event.dateTime).isSame(now, 'month')
      );
    } else if (filter === 'Last Month') {
      const lastMonth = now.subtract(1, 'month');
      filtered = filtered.filter((event) =>
        dayjs(event.dateTime).isSame(lastMonth, 'month')
      );
    }

    // Sort by newest date first
    filtered = filtered.sort(
      (a, b) => dayjs(b.dateTime).valueOf() - dayjs(a.dateTime).valueOf()
    );

    setFilteredEvents(filtered);
  }, [events, search, filter]);

  return (
    <div className="px-4 md:px-12 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 bg-gray-50 rounded-md p-3">
        <input
          type="text"
          placeholder="Search events by title..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Today</option>
          <option>Current Week</option>
          <option>Last Week</option>
          <option>Current Month</option>
          <option>Last Month</option>
        </select>
      </div>


      {filteredEvents?.length === 0 ? (
        <p className="text-center text-gray-400">No events found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
