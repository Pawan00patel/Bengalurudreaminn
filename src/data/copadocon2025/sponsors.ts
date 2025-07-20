export interface Sponsor {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  logo: string;
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 's1',
    name: 'Copado',
    tier: 'Platinum',
    logo: '/images/sponsors/copado.png',
    website: 'https://copado.com',
  },
  {
    id: 's2',
    name: 'TechCorp',
    tier: 'Gold',
    logo: '/images/sponsors/techcorp.png',
    website: 'https://techcorp.com',
  },
  {
    id: 's3',
    name: 'CloudBase',
    tier: 'Silver',
    logo: '/images/sponsors/cloudbase.png',
    website: 'https://cloudbase.com',
  },
];
