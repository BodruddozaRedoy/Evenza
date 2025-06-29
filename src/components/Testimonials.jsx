import React from 'react';

const testimonials = [
  {
    name: "Afsana Jahan",
    role: "Marketing Lead, TechFest",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "The platform made managing our hackathon incredibly smooth. Registration, updates, and communication — all in one place. Loved it!"
  },
  {
    name: "Mehedi Hasan",
    role: "Musician, Summer Vibes Fest",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    message: "Our concert went viral thanks to the event filters and seamless ticketing. It’s built for both organizers and fans."
  },
  {
    name: "Dr. Sabrina Karim",
    role: "Wellness Coach, Retreat 360",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    message: "Participants appreciated how easy it was to register and stay informed. I’ll be using this platform for all future events."
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">What People Are Saying</h2>
        <p className="text-gray-500 mt-3">Hear from real users who’ve hosted or attended events on our platform.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">“{testimonial.message}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
