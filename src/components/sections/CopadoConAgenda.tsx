import React from 'react';
import '../../styles/CopadoConAgenda.css';

const agendaImage = '/images/agenda pdf/coapadoconagenda.jpg';;

const CopadoConAgenda: React.FC = () => {
  const openAgenda = () => {
    window.open(agendaImage, '_blank');
  };

  return (
    <div className="copado-con-agenda-container">
      <h2 className="copado-con-agenda-title">Agenda</h2>
      <div className="copado-con-agenda-thumbnail" onClick={openAgenda} role="button" tabIndex={0} aria-label="Open Agenda PDF" onKeyPress={e => { if (e.key === 'Enter') openAgenda(); }}>
        <img src={agendaImage} alt="Event Agenda Thumbnail" className="copado-con-agenda-img" />
        <div className="copado-con-agenda-overlay">Click to view full agenda</div>
      </div>
    </div>
  );
};

export default CopadoConAgenda;
