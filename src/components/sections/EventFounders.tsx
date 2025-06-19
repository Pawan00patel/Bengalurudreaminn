import React, { useState } from 'react';
import { eventFounders } from '../../data/constants';

const EventFounders: React.FC = () => {
  const [selected, setSelected] = useState<null | typeof eventFounders[0]>(null);

  return (
    <div>
      <h2 className="mb-4 text-center">Event Founders</h2>
      <div className="row justify-content-center">
        {eventFounders.map((founder, idx) => (
          <div className="col-md-4 col-12 d-flex flex-column align-items-center mb-4" key={founder.name}>
            <div
              className="rounded-circle overflow-hidden mb-3 shadow"
              style={{ width: 220, height: 220, cursor: 'pointer', background: '#fff' }}
              onClick={() => setSelected(founder)}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <h4 className="fw-bold text-center">{founder.name}</h4>
            <div className="text-center text-muted mb-2" style={{ minHeight: 40 }}>{founder.title}</div>
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
                    className="rounded w-100"
                    style={{ maxWidth: 320, objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-7 col-12">
                  <div className="mb-2 fw-semibold">{selected.title}</div>
                  {selected.bio.map((line, i) => (
                    <div className="mb-2" key={i}>{line}</div>
                  ))}
                  {/* Social icons can be added here if links are available */}
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
