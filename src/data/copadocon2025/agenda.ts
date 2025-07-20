export interface AgendaItem {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  speakerIds: string[];
}

export const agenda: AgendaItem[] = [
  {
    id: 'a1',
    day: 'Day 1',
    time: '09:00 - 10:00',
    title: 'Opening Keynote',
    description: 'Kickoff and welcome to Copado 2025.',
    speakerIds: ['1'],
  },
  {
    id: 'a2',
    day: 'Day 1',
    time: '10:15 - 11:00',
    title: 'DevOps Best Practices',
    description: 'Modern DevOps strategies for Salesforce.',
    speakerIds: ['2'],
  },
  {
    id: 'a3',
    day: 'Day 1',
    time: '11:15 - 12:00',
    title: 'Salesforce Release Management',
    description: 'Streamlining your release process with Copado.',
    speakerIds: ['3'],
  },
  {
    id: 'a4',
    day: 'Day 1',
    time: '01:00 - 02:00',
    title: 'Lunch & Learn',
    description: 'Networking lunch with interactive discussions.',
    speakerIds: [],
  },
  {
    id: 'a5',
    day: 'Day 1',
    time: '02:15 - 03:00',
    title: 'Continuous Integration/Continuous Deployment',
    description: 'Implementing CI/CD in Salesforce environments.',
    speakerIds: ['4'],
  },
  {
    id: 'a6',
    day: 'Day 1',
    time: '03:15 - 04:00',
    title: 'Panel Discussion: The Future of DevOps',
    description: 'Industry experts discuss the evolution of DevOps.',
    speakerIds: ['5', '6', '7'],
  },
  {
    id: 'a7',
    day: 'Day 2',
    time: '09:00 - 10:00',
    title: 'Keynote: Transforming Business with DevOps',
    description: 'How DevOps is changing the business landscape.',
    speakerIds: ['8'],
  },
  {
    id: 'a8',
    day: 'Day 2',
    time: '10:15 - 11:00',
    title: 'Advanced Git for Salesforce',
    description: 'Mastering Git in Salesforce development.',
    speakerIds: ['9'],
  },
  {
    id: 'a9',
    day: 'Day 2',
    time: '11:15 - 12:00',
    title: 'Automating Salesforce with Copado',
    description: 'Deep dive into automation capabilities.',
    speakerIds: ['10'],
  },
  {
    id: 'a10',
    day: 'Day 2',
    time: '01:00 - 02:00',
    title: 'Networking Lunch',
    description: 'Connect with peers and industry leaders.',
    speakerIds: [],
  },
  {
    id: 'a11',
    day: 'Day 2',
    time: '02:15 - 03:00',
    title: 'Monitoring and Logging in Salesforce',
    description: 'Best practices for observability in Salesforce.',
    speakerIds: ['11'],
  },
  {
    id: 'a12',
    day: 'Day 2',
    time: '03:15 - 04:00',
    title: 'Closing Keynote: The Next Generation of Salesforce DevOps',
    description: 'What\'s next for DevOps in the Salesforce ecosystem.',
    speakerIds: ['12'],
  },
];
