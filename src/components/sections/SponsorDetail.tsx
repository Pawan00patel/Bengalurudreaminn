import React from "react";

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

const iconStyle: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "8px",
  boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
  transition: "transform 0.2s ease",
};

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
  blogs,
}) => {
  const socials = { linkedin, twitter, instagram, youtube };

  return (
    <div
      className="sponsor-detail"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(110deg,#e3eeff 0%, #777474ff 100%)",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          background: "white",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
          padding: "2.5rem 2rem",
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
            color: "#393939",
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
                    <img
                      src={ic.src}
                      alt={ic.name}
                      style={{
                        ...iconStyle,
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.15)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
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
  );
};

export default SponsorDetail;
