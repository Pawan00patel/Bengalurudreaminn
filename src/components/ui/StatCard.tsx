import React from 'react';
import { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {stat.number}
      </div>
      <div className="text-gray-600">
        {stat.label}
      </div>
    </div>
  );
};

export default StatCard;