import React from 'react';

const blogs = [
  {
    id: 1,
    title: '5 Essential Tools for Managing Events Online',
    excerpt: 'Explore top event management tools to streamline scheduling, registrations, attendee tracking, and live engagement.',
    image: 'https://thumbs.dreamstime.com/b/hand-marker-writing-event-management-concept-93231543.jpg',
    author: 'Redoy Ahmed',
    date: 'June 25, 2025'
  },
  {
    id: 2,
    title: 'How to Promote Your Event and Boost Attendance',
    excerpt: 'Learn proven strategies for marketing your event on social media, email, and influencer networks to attract the right audience.',
    image: 'https://www.digitaljoy.media/wp-content/uploads/2025/02/audience-engagement-1024x683.png',
    author: 'Shamima Nahar',
    date: 'June 20, 2025'
  },
  {
    id: 3,
    title: 'Building a Custom Event Management System with MERN',
    excerpt: 'A developer’s guide to creating a complete event management platform using MongoDB, Express, React, and Node.js.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1jqXQo83UjtoCLzSh7LLXjKURqwaw8JK-A&s',
    author: 'Faisal Khan',
    date: 'June 15, 2025'
  }
];

export default function Blog() {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Blogs</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Tips, tutorials, and best practices to help you build, promote, and manage successful events with ease.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="text-sm text-gray-400">{blog.author} • {blog.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
