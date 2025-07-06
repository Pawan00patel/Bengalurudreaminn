export interface Volunteer {
  id: string;
  name: string;
  department: string;
  year: number;
  image: string;
  bio: string[];
  linkedin?: string;
}

export const volunteers: Volunteer[] = [
  {
    id: 'vol-1',
    name: 'Ravi Kumar',
    department: 'Logistics',
    year: 2023,
    image: '/images/coreteamandfounders/Sesha-bro-dp.jpg',
    bio: [
      'Managed logistics for multiple events.',
      'Ensured smooth transportation and setup.'
    ],
    linkedin: 'https://www.linkedin.com/in/ravi-kumar/'
  },
  {
    id: 'vol-2',
    name: 'Priya Sharma',
    department: 'Hospitality',
    year: 2024,
    image: '/images/coreteamandfounders/Aish-scaled.jpg',
    bio: [
      'Led the hospitality team for 2024 events.',
      'Coordinated with vendors and guests.'
    ],
    linkedin: 'https://www.linkedin.com/in/priya-sharma/'
  },
  {
    id: 'vol-3',
    name: 'Amit Singh',
    department: 'Technical',
    year: 2023,
    image: '/images/coreteamandfounders/Sukesh-1-1.jpg',
    bio: [
      'Handled technical setup and troubleshooting.',
      'Supported speakers with AV needs.'
    ],
    linkedin: 'https://www.linkedin.com/in/amit-singh/'
  },
  {
    id: 'vol-4',
    name: 'Sneha Rao',
    department: 'Marketing',
    year: 2022,
    image: '/images/coreteamandfounders/ShravaniNevagi.jpg',
    bio: [
      'Managed social media campaigns.',
      'Designed event posters and banners.'
    ],
    linkedin: 'https://www.linkedin.com/in/sneha-rao/'
  }
];
