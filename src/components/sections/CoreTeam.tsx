import React, { useState } from 'react';
import { coreTeam, PUBLIC_URL } from '../../data/constants';
//import { X } from 'lucide-react';
import '../../styles/CoreTeam.css';

interface ModalProps {
  member: typeof coreTeam[0];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ member, onClose }) => {
  return (
    <div className="modal show d-block core-team-modal">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title">{member.name}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-5 text-center">
                <div className="rounded-circle overflow-hidden mx-auto mb-4" style={{ width: '200px', height: '200px' }}>
                  <img 
                    src={`${PUBLIC_URL}${member.image}`} 
                    alt={member.name}
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
                <h4 className="text-primary mb-2">{member.role}</h4>
              </div>
              <div className="col-md-7">
                <div className="ps-md-4">
                  {Array.isArray(member.bio) ? (
                    member.bio.map((line, index) => (
                      <p key={index} className="mb-3 text-muted">{line}</p>
                    ))
                  ) : (
                    <p className="mb-3 text-muted">{member.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<typeof coreTeam[0] | null>(null);

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-4 mb-5">Meet Our Core Team</h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {coreTeam.map((member) => (
            <div key={member.id} className="col">
              <div className="card h-100 border-0 shadow-sm text-center hover-effect" 
                   style={{ cursor: 'pointer' }}
                   onClick={() => setSelectedMember(member)}>
                <div className="card-body p-4">
                  <div className="rounded-circle overflow-hidden mx-auto mb-4 position-relative" 
                       style={{ width: '200px', height: '200px', border: '4px solid #6f42c1' }}>
                    <img 
                      src={`${PUBLIC_URL}${member.image}`} 
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover transition"
                    />
                  </div>
                  <h3 className="h4 mb-2">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted text-truncate-3">
                    {Array.isArray(member.bio) ? member.bio[0] : member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <Modal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CoreTeam;
