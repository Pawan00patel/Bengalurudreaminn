import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { events } from '../../data/constants';
import '../../styles/Events.css';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 bg-dark text-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary fw-semibold mb-3 d-block">
            Journey Through Time
          </span>
          <h2 className="display-5 fw-bold mb-4 text-white">Our Events Timeline</h2>
          <p className="lead mx-auto text-white-50" style={{ maxWidth: '700px' }}>
            Experience the evolution of Bengaluru Dreamin through our remarkable events
            that have shaped the Salesforce community.
          </p>
        </div>

        {/* Timeline */}
        <VerticalTimeline>
          {events.map((event) => (
            <VerticalTimelineElement
              key={event.id}
              date={new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              icon={<span style={{
                display: 'block',
                width: 16,
                height: 16,
                borderRadius: '50%',
                background: event.type === 'meetup' ? '#0d6efd' : event.type === 'workshop' ? '#198754' : '#ff5722',
                margin: 'auto',
                boxShadow: '0 0 0 4px #232323',
              }} />}
              iconStyle={{ background: 'transparent', boxShadow: 'none', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              contentStyle={{ background: '#232323', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #232323' }}
            >
              <h4 className="fw-bold mb-1">{event.title}</h4>
              <span className="badge bg-primary rounded-pill mb-2">
                {event.attendees} Attendees
              </span>
              <p className="text-light mb-0">{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Events;