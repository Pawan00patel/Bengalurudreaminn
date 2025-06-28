import React, { useState } from 'react';
import { coreTeam, PUBLIC_URL } from '../../data/constants';
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
                {member.linkedin && (
                  <div className="d-flex justify-content-center my-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <img src="/images/socialmediaicons/icons8-linkedin-48.png" alt="LinkedIn" style={{ width: 32, height: 32 }} />
                    </a>
                  </div>
                )}
                <div className="mt-3 d-flex align-items-center gap-3">
                  {/* Only X icon here if present */}
                  {member.x && member.x !== '' && (
                    <a href={member.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                      <img src="/images/socialmediaicons/icons8-x-50.png" alt="X" style={{ width: 28, height: 28 }} />
                    </a>
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
    <div className="our-team-page-bg py-5">
      <div className="container">
        <h2 className="text-center display-4 mb-5">Meet Our Core Team</h2>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {coreTeam.map((member) => (
            <div key={member.id} className="col">
              <div className="card-coreteam-modern" onClick={() => setSelectedMember(member)}>
                <div className="img-coreteam-container">
                  <img 
                    src={`${PUBLIC_URL}${member.image}`} 
                    alt={member.name}
                    className="img-coreteam-modern"
                  />
                </div>
                <div className="speaker-content-block card-blur-content">
                  <h3 className="speaker-name-modern">{member.name}</h3>
                  <p className="speaker-role-modern">{member.role}</p>
                  <p className="speaker-experience-modern">
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
