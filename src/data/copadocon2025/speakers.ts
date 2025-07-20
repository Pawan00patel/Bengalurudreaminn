export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  photo: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Jane Doe',
    title: 'CTO',
    company: 'Copado',
    bio: 'Cloud DevOps leader and conference keynote speaker.',
    photo: '/images/speakers/jane.jpg',
    social: {
      twitter: 'https://twitter.com/janedoe',
      linkedin: 'https://linkedin.com/in/janedoe',
    },
  },
  {
    id: '2',
    name: 'John Smith',
    title: 'VP Engineering',
    company: 'TechCorp',
    bio: 'Expert in CI/CD and agile transformation.',
    photo: '/images/speakers/john.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/johnsmith',
      github: 'https://github.com/johnsmith',
    },
  },
  {
    id: '3',
    name: 'Priya Patel',
    title: 'Community Leader',
    company: 'SalesforceBen',
    bio: 'Salesforce MVP and passionate about community building.',
    photo: '/images/speakers/priya.jpg',
    social: {
      twitter: 'https://twitter.com/priyapatel',
      linkedin: 'https://linkedin.com/in/priyapatel',
    },
  },
];
