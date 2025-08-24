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
                {/* Profile Picture */}
                <img
                  src={vol.image}
                  alt={vol.name}
                  className="profile-pic"
                />
              </a>

                            <a
                href={vol.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <h4 className="fw-bold mb-1" style={{ color: '#fff' }}>
                  {vol.name}
                </h4>
              </a>


              {/* LinkedIn Logo */}
              {vol.linkedin && (
                <div className="d-flex justify-content-center mt-2">
                  <a
                    href={vol.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img
                      src="/images/socialmediaicons/icons8-linkedin-48.png"
                      alt="LinkedIn"
                      className="linkedin-icon"
                    />
                  </a>
                </div>
              )}
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

        /* Profile Picture */
        .volunteer-card img.profile-pic {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #fff; /* white border only for profile pic */
          margin-bottom: 16px;
          transition: transform 0.2s ease;
        }

        /* Profile picture hover effect */
        .volunteer-card a:hover img.profile-pic {
          transform: scale(1.05);
        }

        /* LinkedIn icon (no border) */
        .volunteer-card img.linkedin-icon {
          width: 28px;
          height: 28px;
          border: none;
          transition: transform 0.2s ease;
        }

        /* LinkedIn icon hover */
        .volunteer-card a:hover img.linkedin-icon {
          transform: scale(1.15);
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
