import React from 'react';
import { volunteers } from '../../data/volunteer';

const Volunteers: React.FC = () => {
  return (
    <div
      className="min-vh-100 our-team-page-bg py-5"
      style={{
        background:
          'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 50%,rgb(87, 32, 32) 100%)',
        color: '#fff',
        overflow: 'hidden'
      }}
    >
      <h2 className="mb-4 text-center" style={{ color: '#fff' }}>
        Volunteers
      </h2>

      <div className="container">
        {volunteers.length === 0 && (
          <div className="text-white-50 text-center">
            No volunteers found.
          </div>
        )}

        <div className="volunteers-grid">
          {volunteers.map(vol => (
            <div className="volunteer-card" key={vol.id}>
              <a
                href={vol.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vol.image} alt={vol.name} />
              </a>
              <a
                href={vol.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <h4 className="fw-bold mb-1" style={{ color: '#f472b6' }}>
                  {vol.name}
                </h4>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .volunteers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .volunteer-card {
          background: rgba(0,0,0,0.75);
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
        }

        .volunteer-card:hover {
          transform: scale(1.04);
        }

        .volunteer-card img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #fff;
          margin-bottom: 16px;
        }

        @media (max-width: 992px) {
          .volunteers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .volunteers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Volunteers;
