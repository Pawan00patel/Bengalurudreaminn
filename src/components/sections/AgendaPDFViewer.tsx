
import React from 'react';

const pdfUrl = '/images/agenda pdf/Session Wise Agenda - Team.pdf';
const thumbnailUrl = '/images/agenda pdf/Full Agenda - Team_page-0001.jpg'; // Save your provided image as this file

const AgendaPDFViewer: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '120px',
        padding: '3vw 0',
        width: '100%',
        background: 'linear-gradient(180deg, #000000ff 0%,  #000000ff 100%)',
      }}
    >
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          background: 'rgba(0,0,0,0.10)',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          overflow: 'hidden',
          padding: '2vw',
          maxWidth: '1100px',
          width: '100%',
        }}
        title="View Event Agenda (PDF)"
      >
        <img
          src={thumbnailUrl}
          alt="Event Agenda Thumbnail"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            objectFit: 'contain',
            background: 'black',
            boxShadow: '0 2px 8px rgba(39, 32, 240, 1)'
          }}
        />
      </a>
    </div>
  );
};

export default AgendaPDFViewer;
