import { Speaker, Reason, Stat, Event, NavItem, CoreTeamMember } from '../types';

export const PUBLIC_URL = process.env.PUBLIC_URL || '';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'speakers', label: 'Speakers', href: '#speakers' },
  { id: 'events', label: 'Events', href: '#events' },
  { id: 'core-team', label: 'Core Team', href: '/core-team' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const speakers: Speaker[] = [
  {
    id: 'nalini-sharma',
    name: "Nalini Sharma",
    role: "Head - Sourcing, Competency & Governance",
    company: "TCS",
    experience: "24 years",
    image: "/api/placeholder/150/150",
    bio: "With an impressive career spanning 24 years, Nalini currently holds the esteemed position of Head of Sourcing, Competency, and Governance - Salesforce Practice at TCS."
  },
  {
    id: 'shibu-mathew',
    name: "Shibu Mathew",
    role: "Salesforce MVP, APAC Head",
    company: "UST",
    badges: ["MVP", "Marketing Champion", "Golden Hoodie"],
    image: "/api/placeholder/150/150",
    bio: "Shibu brings a wealth of experience and leadership with an impressive 17-year journey in the Salesforce ecosystem."
  },
  {
    id: 'kannan-narayanan',
    name: "Kannan Narayanan",
    role: "Salesforce MVP & Unit Technology Officer",
    company: "Infosys",
    certifications: "50+ Salesforce credentials",
    image: "/api/placeholder/150/150",
    bio: "Kannan brings over 11 years of invaluable contributions to the Salesforce community as a Salesforce MVP and seasoned Practitioner."
  },
  {
    id: 'roshan-dsouza',
    name: "Roshan D'Souza",
    role: "Founder & Host",
    company: "The Salesforce Club",
    specialty: "Career Counselling",
    image: "/api/placeholder/150/150",
    bio: "Founder and CEO of Altokk Software Solutions and host of insightful conversations at The Salesforce Club."
  }
];

export const reasons: Reason[] = [
  {
    id: 'networking',
    title: "Greatest Minds Together",
    description: "Network with the most brilliant minds in the Salesforce community under one roof",
    icon: 'users'
  },
  {
    id: 'learning',
    title: "Learn from the Best",
    description: "Speakers with the greatest minds and ideas will share their knowledge and expertise",
    icon: 'award'
  },
  {
    id: 'social-impact',
    title: "Social Impact",
    description: "Join hands with us in focusing on various social movements and community initiatives",
    icon: 'heart'
  },
  {
    id: 'after-party',
    title: "Unforgettable After Party",
    description: "Experience a wonderful after party that you absolutely wouldn't want to miss",
    icon: 'star'
  }
];

export const stats: Stat[] = [
  { id: 'attendees', number: "650+", label: "Attendees (Post-COVID)" },
  { id: 'trailblazers', number: "80+", label: "Trailblazers" },
  { id: 'students', number: "600+", label: "Students Reached" },
  { id: 'experience', number: "24", label: "Years Experience" }
];

export const coreTeam: CoreTeamMember[] = [
  {
    id: 'aishwarya-prakash',
    name: 'Aishwarya Prakash',
    role: 'Volunteers & Working Professionals Training Head',
    image: '/images/coreteamandfounders/Aish-scaled.jpg',
    bio: [
      'Salesforce SMTS at Athenahealth with 7x Salesforce and ServiceMax Certifications.',
      'Created impact in many women who took a career break by teaching them the Salesforce and helped them to get hired into Salesforce ecosystem.',
      'Passionate about mentoring and enabling individuals interested in Salesforce, including students and professionals, to be part of the ecosystem.'
    ]
  },
  {
    id: 'sukesh-koppineedi',
    name: 'Sukesh Koppineedi',
    role: 'Marketing & Procurement Head',
    image: '/images/coreteamandfounders/Sukesh-1-1.jpg',
    bio: [
      'Senior Software Engineer with 8x Salesforce-certified, 1x Salesforce Accredited Certified, 1x MuleSoft Certified, 1x Copado Certified, and All Star Ranger in Trailhead.',
      'J2S Success Story, J2S Brand Ambassador and featured in the Salesforce Developers Blog - "Journey to Salesforce Goes Global."',
      'I\'m an extrovert, always excited and enthusiastic about helping fellow trailblazers in the Salesforce community.',
      'Actively engaged on all major Social Media Platforms. Passionate about watching and playing Cricket and Badminton.'
    ]
  },
  {
    id: 'sudeer-kamat',
    name: 'Sudeer Kamat',
    role: 'Creativity & Alignment Head',
    image: '/images/coreteamandfounders/Sudeer-1-2.png',
    bio: [
      'Lead Software Engineer with 8x Salesforce certifications.',
      'Co-Leading the Company Wide Salesforce Developer Group',
      'Mentor at Trailblazer Mentorship Program.',
      'Loves sharing new Salesforce Updates on Social Media, Also a Design Lover.'
    ]
  },
  {
    id: 'Chaitra C S',
    name: 'Chaitra C S',
    role: 'J2S & Students Training Head',
    image: '/images/coreteamandfounders/IMG_20230923_094227.jpg',
    bio: [
      'Salesforce Developer with expertise in Lightning Web Components',
      'Active member of Bengaluru Salesforce Developer Group',
      'Passionate about creating engaging social media content',
      'Manages financial planning and budgeting for community events'
    ]
  },
  {
    id: 'Pawna Kumar Patel R',
    name: 'Pawna Kumar Patel R',
    role: 'Event Management Lead',
    image: '/images/coreteamandfounders/Screenshot 2023-05-29 062920.png',
    bio: [
      'Experienced Event Coordinator with focus on Salesforce community events',
      'Specializes in planning and executing large-scale tech conferences',
      'Strong network within the Salesforce ecosystem',
      'Dedicated to creating memorable event experiences'
    ]
  }
];

export const events: Event[] = [
  {
    id: 'dec-17-2022',
    date: '2022-12-17',
    title: "Integrating Salesforce Orgs without Code",
    description: "The Salesforce Session along with 80+ trailblazers",
    attendees: "80+",
    type: 'workshop'
  },
  {
    id: 'feb-11-2023',
    date: '2023-02-11',
    title: "Open AI and chatGPT in salesforce",
    description: "Salesforce session along with 60+ trailblazers",
    attendees: "60+",
    type: 'workshop'
  },
  {
    id: 'jun-24-2023',
    date: '2023-06-24',
    title: "Bengaluru Mega Meetup",
    description: "The biggest in-person event in India Post Covid conducted with 650+ attendees",
    attendees: "650+",
    type: 'meetup'
  },
  {
    id: 'jul-22-2023',
    date: '2023-07-22',
    title: "AI Event in a Box - Generative AI for Admins",
    description: "The Salesforce Session with 120+ trailblazers",
    attendees: "120+",
    type: 'workshop'
  },
  {
    id: 'aug-12-2023',
    date: '2023-08-12',
    title: "Salesforce workshop at Cambridge Institute",
    description: "Workshop at Cambridge Institute along with 600+ students",
    attendees: "600+",
    type: 'workshop'
  },
  {
    id: 'sep-02-2023',
    date: '2023-09-02',
    title: "Salesforce workshop at East Point College",
    description: "Workshop at East Point College along with 200+ students",
    attendees: "200+",
    type: 'workshop'
  },
  {
    id: 'sep-09-2023',
    date: '2023-09-09',
    title: "Salesforce workshop at Ramaiah Institute",
    description: "Workshop at Ramaiah Institute along with 200+ students",
    attendees: "200+",
    type: 'workshop'
  },
  {
    id: 'sep-23-2023',
    date: '2023-09-23',
    title: "Salesforce workshop at ACS College",
    description: "Workshop at ACS College along with 400+ students",
    attendees: "400+",
    type: 'workshop'
  },
  {
    id: 'oct-28-2023',
    date: '2023-10-28',
    title: "Bengaluru Ohana Gathering",
    description: "Salesforce Event along with 250+ trailblazers",
    attendees: "250+",
    type: 'meetup'
  },
  {
    id: 'nov-25-2023',
    date: '2023-11-25',
    title: "Salesforce Workshop at Sambhram Institute",
    description: "Workshop at Sambhram Institute along with 300+ students",
    attendees: "300+",
    type: 'workshop'
  },
  {
    id: 'feb-10-2024',
    date: '2024-02-10',
    title: "Bengaluru Ohana Meetup",
    description: "Salesforce Session along with 150+ trailblazers",
    attendees: "150+",
    type: 'meetup'
  },
  {
    id: 'feb-24-2024',
    date: '2024-02-24',
    title: "Salesforce Workshop at New Horizon Management Studies",
    description: "Workshop at New Horizon Management Studies along with 150+ students",
    attendees: "150+",
    type: 'workshop'
  }
];