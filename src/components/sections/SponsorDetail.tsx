import React from "react";
import BengaluruDreaminNavbar from '../layout/BengaluruDreaminNavbar';
import Footer from '../layout/Footer';

interface SponsorDetailProps {
  name: string;
  logo: string;
  description: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  blogs?: Array<{ title: string; url: string; date?: string }>;
}

// Removing unused iconStyle variable to fix lint error


const socialIcons = [
  { name: "LinkedIn", prop: "linkedin", src: "/images/socialmediaicons/icons8-linkedin-48.png" },
  { name: "Twitter", prop: "twitter", src: "/images/socialmediaicons/icons8-x-50.png" },
  { name: "Instagram", prop: "instagram", src: "/images/socialmediaicons/icons8-instagram-48.png" },
  { name: "YouTube", prop: "youtube", src: "/images/socialmediaicons/icons8-youtube-48.png" },
];

const SponsorDetail: React.FC<SponsorDetailProps> = ({
  name,
  logo,
  description,
  linkedin,
  twitter,
  instagram,
  youtube,
  blogs
}) => {
  const socials = { linkedin, twitter, instagram, youtube };
  return (
    <>
      <BengaluruDreaminNavbar />
      <div
     
        className="sponsor-detail"
        style={{
          width: "100%",
          minHeight: "100vh",
         background: "#000000",
          padding: "3rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#000000",
            borderRadius: 20,
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
            padding: "2.5rem 2rem",
            marginTop: "2rem"
          }}
        >
          {/* LOGO SECTION - Full Focus */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <img
              src={logo}
              alt={name}
              style={{
                maxWidth: "320px",
                width: "80%",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 4px 18px rgba(14,90,175,0.18))",
              }}
            />
          </div>
          {/* TITLE */}
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#0e5aaf",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            {name}
          </h2>
          {/* DESCRIPTION */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
              lineHeight: 1.8,
              color: "#fffbfbff",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            {description}
          </p>
          {/* Social Links */}
          {(linkedin || twitter || instagram || youtube) && (
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                justifyContent: "center",
              }}
            >
              {socialIcons.map(
                (ic) =>
                  socials[ic.prop as keyof typeof socials] && (
                    <a
                      key={ic.name}
                      href={socials[ic.prop as keyof typeof socials]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ic.name}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "clamp(38px, 7vw, 48px)",
                          height: "clamp(38px, 7vw, 48px)",
                          borderRadius: "clamp(12px, 2vw, 16px)",
                          background: "rgba(255,255,255,0.18)",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                          boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                          margin: "0 clamp(2px, 1vw, 4px)"
                        }}
                      >
                        <img
                          src={ic.src}
                          alt={ic.name}
                          style={{
                            width: "clamp(28px, 5vw, 36px)",
                            height: "clamp(28px, 5vw, 36px)",
                            borderRadius: "clamp(8px, 1.5vw, 12px)",
                            boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
                            transition: "transform 0.2s ease",
                            cursor: "pointer",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.15)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                      </span>
                    </a>
                  )
              )}
            </div>
          )}
          {/* Blogs Section */}
          {blogs && blogs.length > 0 && (
            <div
              style={{
                marginTop: "2.5rem",
                width: "100%",
                maxWidth: "880px",
                padding: "0 1rem",
              }}
            >
              <h3
                style={{
                  color: "#0e5aaf",
                  fontWeight: 600,
                  fontSize: "1.6rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Blogs
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {blogs.map((blog, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: 16,
                      background: "#f7faff",
                      borderRadius: 12,
                      padding: "14px 18px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#1270db",
                        fontWeight: 500,
                        fontSize: "1.12rem",
                        textDecoration: "none",
                      }}
                    >
                      {blog.title}
                    </a>
                    {blog.date && (
                      <span
                        style={{
                          marginLeft: 10,
                          color: "#666",
                          fontSize: "0.9rem",
                        }}
                      >
                        ({blog.date})
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
  export { SponsorDetail };
  export default SponsorDetail;
