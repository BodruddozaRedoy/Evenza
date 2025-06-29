import React from 'react';
import { CheckCircle } from 'lucide-react'; // Optional icon library

const features = [
  {
    title: "Real-Time Event Updates",
    description: "Get instant updates on schedule changes, new speakers, and venue info across all devices."
  },
  {
    title: "Easy Online Registration",
    description: "Allow users to register for events in seconds — no downloads, no long forms."
  },
  {
    title: "Personalized Dashboards",
    description: "Each attendee can view their own joined events, reminders, and tickets in one place."
  },
  {
    title: "Advanced Search & Filters",
    description: "Find events by category, location, date, or even mood. Just type and go."
  },
  {
    title: "Analytics for Organizers",
    description: "Track attendance, engagement, and feedback to improve your future events."
  },
  {
    title: "After-Event Networking",
    description: "Let users connect with speakers or fellow attendees through post-event networking tools."
  }
];

export default function EventFeatures() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Event Platform?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Built for organizers and attendees — our platform simplifies the event experience from start to finish.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 w-10 h-10  mt-1" />
              <div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
