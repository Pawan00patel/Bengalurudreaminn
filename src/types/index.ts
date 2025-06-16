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
  role: string;
  company: string;
  experience?: string;
  certifications?: string;
  specialty?: string;
  badges?: string[];
  image: string;
  bio?: string;
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