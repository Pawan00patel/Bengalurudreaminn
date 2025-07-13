import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Star, Sparkles } from 'lucide-react';
import { upcomingEvents, UpcomingEvent } from '../../data/upcomingEvents';
import '../../styles/UpcomingEventsComponent.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const UpcomingEventsComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateTimeLeft = (eventDate: string): TimeLeft => {
    const eventTime = new Date(eventDate).getTime();
    const now = currentTime.getTime();
    const difference = eventTime - now;
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: string): string => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const TimerUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="event-timer-unit">
      <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value.toString().padStart(2, '0')}</div>
      <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{label}</div>
    </div>
  );

  const EventCard: React.FC<{ event: UpcomingEvent; index: number }> = ({ event, index }) => {
    const timeLeft = calculateTimeLeft(event.date);
    const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

    return (
      <div 
        className={`event-card group ${event.featured ? 'col-span-2 row-span-2' : ''}`}
        style={{ animationDelay: `${index * 0.1}s`, background: event.gradient }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
        {/* Event image if available */}
        {event.image && (
          <img src={event.image} alt={event.title} className="event-image" />
        )}
        {/* Content */}
        <div className="event-content">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                {event.category}
              </div>
              {event.featured && (
                <div className="flex items-center gap-1 px-2 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full text-xs font-semibold text-yellow-100">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}
            </div>
            <Sparkles className="w-5 h-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </div>
          <h3 className="event-title">
            {event.title}
          </h3>
          <div className="event-meta">
            <span><Calendar className="w-4 h-4" />{formatDate(event.date)}</span>
            <span><Clock className="w-4 h-4" />{formatTime(event.date)}</span>
            <span><MapPin className="w-4 h-4" />{event.location}</span>
            <span><Users className="w-4 h-4" />{event.attendees.toLocaleString()} attending</span>
          </div>
          {/* Countdown Timer */}
          <div className="event-timer">
            {!isExpired ? (
              <>
                <TimerUnit value={timeLeft.days} label="Days" />
                <TimerUnit value={timeLeft.hours} label="Hours" />
                <TimerUnit value={timeLeft.minutes} label="Mins" />
                <TimerUnit value={timeLeft.seconds} label="Secs" />
              </>
            ) : (
              <div className="mb-4 p-3 bg-red-500/20 backdrop-blur-sm rounded-xl">
                <div className="text-white font-semibold">Event has started!</div>
              </div>
            )}
          </div>
          <button className="event-register-btn">
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-header">
        <h2>Upcoming Events</h2>
        <p>
          Join thousands of professionals at our carefully curated events. 
          Don't miss out on the next big opportunity to learn, network, and grow.
        </p>
      </div>
      <div className="upcoming-events-grid">
        {upcomingEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
      <div className="upcoming-events-cta">
        <h3>Don't Miss Out on Future Events!</h3>
        <p>
          Be the first to know about our upcoming events, exclusive workshops, and special announcements.
        </p>
        <button className="cta-btn">
          <span>Subscribe to Updates</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="cta-btn" style={{ border: '2px solid #fff', background: 'transparent', color: '#fff' }}>
          Browse All Events
        </button>
      </div>
    </section>
  );
};

export default UpcomingEventsComponent;
