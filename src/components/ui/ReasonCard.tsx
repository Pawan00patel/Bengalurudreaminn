import React from 'react';
import { Reason } from '../../types';

interface ReasonCardProps {
  reason: Reason;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason }) => {
  const IconComponent = reason.icon as React.ElementType;
  
  return (    <div className="card bg-light border-0 p-4">
      <div className="text-primary mb-4">
        <IconComponent size={32} />
      </div>
      <h3 className="h4 fw-bold mb-3">
        {reason.title}
      </h3>
      <p className="text-muted">
        {reason.description}
      </p>
    </div>
  );
};

export default ReasonCard;