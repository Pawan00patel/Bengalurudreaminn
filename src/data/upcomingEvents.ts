// src/data/upcomingEvents.ts

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string; // ISO string for easier serialization
  location: string;
  attendees: number;
  category: string;
  gradient: string;
  image?: string;
  featured?: boolean;
  link?: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: 'Bengaluru Dreamin 2025',
    date: '2025-09-20T09:00:00',
    location: 'Bangalore International Exhibition Centre, Bengaluru',
    attendees: 1200,
    category: 'Salesforce',
    gradient: 'linear-gradient(300deg,rgb(0, 0, 0) 0%,rgb(4, 4, 4) 50%,rgb(154, 8, 8) 150%)',
    featured: true,
    link: 'https://bengalurudreamin.com/register-2025'
  },
  {
    id: '2',
    title: 'Salesforce Community Meetup',
    date: '2025-08-10T10:00:00',
    location: 'Sheraton Grand, Whitefield',
    attendees: 350,
    category: 'Networking',
    gradient: 'linear-gradient(300deg,rgb(0, 0, 0) 0%,rgb(4, 4, 4) 50%,rgb(154, 8, 8) 150%)',
    link: 'https://bengalurudreamin.com/meetup-2025'
  },
  {
    id: '3',
    title: 'Tech for Good Hackathon',
    date: '2025-08-30T09:30:00',
    location: 'Online',
    attendees: 500,
    category: 'Hackathon',
    gradient: 'linear-gradient(300deg,rgb(0, 0, 0) 0%,rgb(4, 4, 4) 50%,rgb(154, 8, 8) 150%)',
    link: 'https://bengalurudreamin.com/hackathon-2025'
  }
];
