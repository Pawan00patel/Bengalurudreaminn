export interface Sponsor {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Associate' | 'Exclusive Sponsor';
  logo: string;
  website: string;
}

export const sponsors: Sponsor[] = [
  {
    id: 's1',
    name: 'Copado',
    tier: 'Exclusive Sponsor',
    logo: '/images/sponsors/Relanto_Updated_Logo_Open_File.svg',
    website: 'https://www.relanto.ai',
  }

];
