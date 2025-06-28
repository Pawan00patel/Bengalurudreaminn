import React from 'react';
import { useParams } from 'react-router-dom';
import { sponsorsData } from '../../data/sponsorsData';
import SponsorDetail from './SponsorDetail';

const SponsorPage: React.FC = () => {
  const { sponsorId } = useParams<{ sponsorId: string }>();
  const sponsor = sponsorsData.find(s => s.url.endsWith(sponsorId));

  if (!sponsor) {
    return <div style={{ textAlign: 'center', marginTop: '3rem' }}>Sponsor not found.</div>;
  }

  return (
    <SponsorDetail
      name={sponsor.name}
      logo={sponsor.logo}
      description={sponsor.description}
      linkedin={sponsor.linkedin}
      twitter={sponsor.twitter}
      instagram={sponsor.instagram}
      youtube={sponsor.youtube}
    />
  );
};

export default SponsorPage;
