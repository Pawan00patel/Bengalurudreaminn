import React, { useEffect } from 'react';
import { events } from '../../data/constants';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../../styles/Events.css';

const Events: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-in-out',
      mirror: true
    });
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  const getEventIcon = (type: string): string => {
    switch (type) {
      case 'workshop':
        return '📅';
      case 'meetup':
        return '👥';
      default:
        return '📍';
    }
  };

  return (
    <section id="events" className="py-16 bg-light position-relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-primary fw-semibold mb-3 d-block">
            Journey Through Time
          </span>
          <h2 className="display-5 fw-bold mb-4">Our Events Timeline</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Experience the evolution of Bengaluru Dreamin through our remarkable events
            that have shaped the Salesforce community.
          </p>
        </div>

        {/* Timeline */}
        <div className="position-relative">
          {/* Timeline line */}
          <div
            className="position-absolute top-0 start-50 translate-middle-x"
            style={{
              width: '2px',
              height: '100%',
              backgroundColor: '#e9ecef',
              zIndex: 0,
            }}
          ></div>

          {/* Events */}
          <div className="row g-5">            {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`col-lg-6 ${
                    index % 2 === 0 ? 'offset-lg-0' : 'offset-lg-6'
                  }`}
                >
                  <div
                    className="position-relative"
                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                    data-aos-delay={index * 100}
                  >
                    {/* Timeline dot */}
                    <div
                      className="position-absolute top-0"
                      style={{
                        [index % 2 === 0 ? 'right' : 'left']: '-35px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: event.type === 'meetup' ? '#0d6efd' : '#198754',
                        borderRadius: '50%',
                        zIndex: 1,
                        transform: 'translateX(50%)',
                      }}
                    ></div>
                    
                    {/* Card */}
                    <div className="card shadow-sm border-0 p-4 hover-lift">
                      {/* Event Date */}
                      <div className="text-muted mb-3 fw-semibold">
                        {formatDate(event.date)}
                      </div>

                      <div className="d-flex align-items-start gap-3 mb-3">                        <div className={`p-3 rounded-3 bg-${event.type === 'meetup' ? 'primary' : 'success'} bg-opacity-10`}>
                          <span className={`text-${event.type === 'meetup' ? 'primary' : 'success'} fs-4`}>
                            {getEventIcon(event.type)}
                          </span>
                        </div>
                        <div>
                          <h4 className="fw-bold mb-1">{event.title}</h4>
                          <span className="badge bg-primary rounded-pill">
                            {event.attendees} Attendees
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-0">{event.description}</p>
                    </div>
                  </div>                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;