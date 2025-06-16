import React from 'react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (    <div className="card bg-light border-0 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="text-primary fs-4">📅</span>
        <span className="badge bg-primary rounded-pill">
          {event.attendees}
        </span>
      </div>
      
      <h3 className="h4 fw-bold text-dark mb-3">
        {event.title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {event.description}
      </p>
      
      <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center">
        Learn More →
      </button>
    </div>
  );
};

export default EventCard;