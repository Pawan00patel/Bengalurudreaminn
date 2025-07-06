import React, { useState } from 'react';
import { volunteers } from '../../data/volunteer';

const getYears = (data: typeof volunteers) => {
  const years = Array.from(new Set(data.map(item => item.year))).sort((a, b) => b - a);
  return years;
};
const getDepartments = (data: typeof volunteers) => {
  return Array.from(new Set(data.map(item => item.department)));
};

const Volunteers: React.FC = () => {
  const years = getYears(volunteers);
  const departments = getDepartments(volunteers);
  const [activeYear, setActiveYear] = useState<number | 'all'>('all');
  const [activeDept, setActiveDept] = useState<string>('all');

  const filtered = volunteers.filter(v =>
    (activeYear === 'all' || v.year === activeYear) &&
    (activeDept === 'all' || v.department === activeDept)
  );

  return (
    <div className="min-vh-100 our-team-page-bg py-5" style={{ background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 50%,rgb(87, 32, 32) 100%)', color: '#fff', overflow: 'hidden' }}>
      <h2 className="mb-4 text-center" style={{ color: '#fff' }}>Volunteers</h2>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center gap-3">
            <div className="d-flex flex-column flex-md-row align-items-center gap-2">
              <label className="me-2 fw-semibold">Select Year:</label>
              <select className="form-select w-auto" value={activeYear} onChange={e => setActiveYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}>
                <option value="all">All</option>
                {years.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center gap-2">
              <label className="me-2 fw-semibold">Select Department:</label>
              <select className="form-select w-auto" value={activeDept} onChange={e => setActiveDept(e.target.value)}>
                <option value="all">All</option>
                {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {filtered.length === 0 && <div className="text-white-50 text-center">No volunteers found for this selection.</div>}
          {filtered.map(vol => (
            <div className="col-md-8 col-12 d-flex align-items-stretch mb-4" key={vol.id}>
              <div className="d-flex flex-row flex-column flex-md-row w-100 bg-dark bg-opacity-75 rounded-4 shadow-lg overflow-hidden volunteer-card-responsive" style={{ minHeight: 220 }}>
                <div className="d-flex align-items-center justify-content-center p-0 volunteer-img-col" style={{ minWidth: 180, background: 'rgba(0,0,0,0.7)' }}>
                  <img src={vol.image} alt={vol.name} style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: '50%', border: '4px solid #fff', margin: 16 }} />
                </div>
                <div className="flex-grow-1 d-flex flex-column justify-content-center p-4 volunteer-desc-col">
                  <h4 className="fw-bold mb-1" style={{ color: '#f472b6' }}>{vol.name}</h4>
                  <div className="mb-2 text-white-50">{vol.department} | {vol.year}</div>
                  {vol.bio.map((line, i) => <div className="mb-2" key={i}>{line}</div>)}
                  {vol.linkedin && (
                    <div className="d-flex align-items-center mt-2">
                      <a href={vol.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src="/images/socialmediaicons/icons8-linkedin-48.png" alt="LinkedIn" style={{ width: 28, height: 28 }} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .modern-volunteer-card {
          background: rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(236, 12, 12, 0.18);
          transition: transform 0.3s cubic-bezier(.4,2,.6,1);
        }
        .modern-volunteer-card:hover {
          transform: scale(1.045);
          z-index: 2;
        }
        .modern-volunteer-card:hover img {
          transform: scale(1.08);
        }
        select.form-select {
          background: rgba(0,0,0,0.7);
          color: #fff;
          border: 1px solid #fff;
          border-radius: 8px;
          min-width: 100px;
        }
        select.form-select:focus {
          outline: none;
          box-shadow: 0 0 0 2px #f472b6;
        }
        label.fw-semibold {
          color: #fff;
        }
        @media (max-width: 767.98px) {
          .volunteer-card-responsive {
            flex-direction: column !important;
            align-items: center !important;
            min-height: unset !important;
          }
          .volunteer-img-col {
            min-width: unset !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .volunteer-desc-col {
            padding: 1.5rem 1rem !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Volunteers;
