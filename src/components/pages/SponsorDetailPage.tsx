import React from 'react';
import { useParams } from 'react-router-dom';
import { sponsorsData } from '../../data/sponsorsData';
import SponsorDetail from '../sections/SponsorDetail';

const SponsorDetailPage: React.FC = () => {
  const { sponsorSlug } = useParams<{ sponsorSlug: string }>();
  const sponsor = sponsorsData.find(s => s.url.endsWith(`/${sponsorSlug}`));

  if (!sponsor) {
    return <div style={{ textAlign: 'center', margin: '4rem 0', color: '#c00' }}>Sponsor not found.</div>;
  }

  return <SponsorDetail {...sponsor} />;
};

export default SponsorDetailPage;
