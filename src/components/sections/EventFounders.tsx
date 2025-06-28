import React, { useState } from 'react';
import { eventFounders } from '../../data/constants';
import '../../styles/CoreTeam.css';

const EventFounders: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof eventFounders[0]>(null);

  return (
    <div className="our-team-page-bg py-5">
      <h2 className="mb-4 text-center" style={{ color: '#fff' }}>Event Founders</h2>
      <div className="row justify-content-center">
        {eventFounders.map((founder) => (
          <div className="col-md-4 col-12 d-flex flex-column align-items-center mb-4" key={founder.name}>
            <div
              className="card-coreteam-modern"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelected(founder)}
            >
              <div className="img-coreteam-container">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="img-coreteam-modern"
                />
              </div>
              <div className="speaker-content-block card-blur-content">
                <h3 className="speaker-name-modern">{founder.name}</h3>
                <p className="speaker-role-modern">{founder.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selected && (
        <div className="modal fade show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h3 className="modal-title fw-bold text-success">{selected.name}</h3>
                <button type="button" className="btn-close" aria-label="Close" onClick={() => setSelected(null)}></button>
              </div>
              <div className="modal-body row">
                <div className="col-md-5 col-12 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="rounded-circle w-100"
                    style={{ maxWidth: 320, objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-7 col-12">
                  <div className="mb-2 fw-semibold">{selected.title}</div>
                  {selected.bio.map((line, i) => (
                    <div className="mb-2" key={i}>{line}</div>
                  ))}
                  {selected.linkedin && (
                    <div className="d-flex justify-content-center my-3">
                      <a href={selected.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/images/socialmediaicons/icons8-linkedin-48.png" alt="LinkedIn" style={{ width: 32, height: 32 }} />
                      </a>
                    </div>
                  )}
                  <div className="mt-3 d-flex align-items-center gap-3">
                    {selected.x && selected.x !== '' && (
                      <a href={selected.x} target="_blank" rel="noopener noreferrer" aria-label="X">
                        <img src="/images/socialmediaicons/icons8-x-50.png" alt="X" style={{ width: 28, height: 28 }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFounders;
