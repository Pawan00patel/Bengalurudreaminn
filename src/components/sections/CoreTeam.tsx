import React, { useState } from 'react';
import { coreTeam, PUBLIC_URL } from '../../data/constants';
import '../../styles/CoreTeam.css';

const getYears = (data: typeof coreTeam) => {
  const years = Array.from(new Set(data.map(item => item.year))).sort((a, b) => b - a);
  return years;
};

const CoreTeam: React.FC = () => {
  const years = getYears(coreTeam);
  const [activeYear, setActiveYear] = useState<number | 'all'>('all');
  const [selected, setSelected] = useState<null | typeof coreTeam[0]>(null);
  const filtered = coreTeam.filter(m => activeYear === 'all' || m.year === activeYear);

  return (
    <div className="min-vh-100 our-team-page-bg py-5" style={{ background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 50%,rgb(87, 32, 32) 100%)', color: '#fff', overflow: 'hidden' }}>
      <h2 className="mb-4 text-center" style={{ color: '#fff' }}>Meet Our Core Team</h2>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center gap-3">
            <div className="d-flex flex-column flex-md-row align-items-center gap-2">
              <label className="me-2 fw-semibold" style={{fontSize: '1.15rem', color: '#fff'}}>Select Year:</label>
              <select
                className="form-select w-auto year-select-custom"
                value={activeYear}
                onChange={e => setActiveYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                style={{
                  background: 'transparent',
                  color: '#fff',
                  border: '1.5px solid #fff',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  padding: '6px 24px',
                  minWidth: 90,
                  boxShadow: 'none',
                  outline: 'none',
                  appearance: 'none',
                  transition: 'border 0.2s',
                }}
              >
                <option value="all">All</option>
                {years.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {filtered.map((member) => (
            <div className="col-md-4 col-12 d-flex flex-column align-items-center mb-4" key={member.id}>
              <div
                className="modern-coreteam-card coreteam-hover-zoom"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 350,
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',
                  background: 'rgba(255, 255, 255, 0.10)',
                  backdropFilter: 'blur(6px)',
                  border: '1.5px solid rgb(236, 14, 14)',
                  cursor: 'pointer',
                  margin: '0 auto',
                  transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                }}
                onClick={() => setSelected(member)}
              >
                <img
                  src={`${PUBLIC_URL}${member.image}`}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: 320,
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: '1.5rem 1rem 1rem 1rem',
                    background: 'linear-gradient(0deg, rgba(241, 85, 0, 0.92) 0%, rgba(241, 85, 0, 0.7) 40%, rgba(241, 85, 0, 0.0) 100%)',
                    color: '#fff',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                  }}
                >
                  <h4 style={{ margin: 0, fontWeight: 700 }}>{member.name}</h4>
                  <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 8 }}>{member.role} | {member.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {selected && (
          <>
            <div className="modal-blur-bg show" />
            <div className="modal fade show d-block" tabIndex={-1}>
              <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content" style={{
                  background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(186, 108, 49) 100%)',
                  color: '#fff',
                  border: 'none',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  borderRadius: 18,
                  overflow: 'hidden',
                }}>
                  <div className="modal-header border-0" style={{ background: 'transparent', color: '#fff' }}>
                    <h3 className="modal-title fw-bold" style={{ color: '#fff' }}>{selected.name}</h3>
                    <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => setSelected(null)}></button>
                  </div>
                  <div className="modal-body row">
                    <div className="col-md-5 col-12 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                      <img
                        src={`${PUBLIC_URL}${selected.image}`}
                        alt={selected.name}
                        className="rounded-circle w-100"
                        style={{ maxWidth: 320, objectFit: 'cover', border: '4px solid #fff' }}
                      />
                    </div>
                    <div className="col-md-7 col-12">
                      <div className="mb-2 fw-semibold" style={{ color: '#fff' }}>{selected.role}</div>
                      {Array.isArray(selected.bio)
                        ? selected.bio.map((line, i) => (
                            <div className="mb-2" key={i} style={{ color: '#fff' }}>{line}</div>
                          ))
                        : <div className="mb-2" style={{ color: '#fff' }}>{selected.bio}</div>}
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
            <style>{`
              .modal-blur-bg {
                position: fixed;
                z-index: 1040;
                top: 0; left: 0; right: 0; bottom: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0,0,0,0.18);
                backdrop-filter: blur(8px);
                animation: blurIn 0.4s cubic-bezier(.4,2,.6,1);
                transition: backdrop-filter 0.3s, background 0.3s;
              }
              @keyframes blurIn {
                from { backdrop-filter: blur(0px); background: rgba(0,0,0,0); }
                to { backdrop-filter: blur(8px); background: rgba(0,0,0,0.18); }
              }
            `}</style>
          </>
        )}
      </div>
      <style>{`
        .coreteam-hover-zoom:hover {
          transform: scale(1.045);
          z-index: 2;
        }
        .coreteam-hover-zoom:hover img {
          transform: scale(1.08);
        }
        .year-select-custom:focus {
          border: 2px solid #f472b6 !important;
          box-shadow: 0 0 0 2px #f472b6 !important;
        }
        .year-select-custom option {
          color: #222;
        }
      `}</style>
    </div>
  );
};

export default CoreTeam;
