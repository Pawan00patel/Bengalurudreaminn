// This file exports TypeScript interfaces and types used throughout the application.

export interface AppProps {
    title: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface Speaker {
  id: string;
  name: string;
  topic: string;
  experience?: string;
  image: string;
  linkedin?: string;
  dateSpoken?: string;
}

export interface Reason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  number: string;
  label: string;
}

export interface Event {
  id: string;
  date: string;
  title: string;
  description: string;
  attendees: string;
  type: 'workshop' | 'keynote' | 'networking' | 'panel' | 'outreach' | 'meetup';
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CoreTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
  linkedin?: string;
  x?: string;
  year: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}


export interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  image: string;
}