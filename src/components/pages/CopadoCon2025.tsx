import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import CopadoConNav from './copadocon2025/CopadoConNav';
import About from './copadocon2025/About';
import Sponsors from './copadocon2025/Sponsors';
import Agenda from './copadocon2025/Agenda';
import Speakers from './copadocon2025/Speakers';
import Others from './copadocon2025/Others';

const CopadoCon2025: React.FC = () => {
  const { path } = useRouteMatch();
  return (
    <main style={{
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #111212ff 0%, #041c38ff 100%)',
      padding: '3rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    }}>
      <div style={{
        background: '#faffffc9',
        borderRadius: 18,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        width: '95%',
        margin: '0 auto',
        padding: '2.5rem 2rem 1.5rem 2rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: '#111',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <img src={process.env.PUBLIC_URL + '/images/logos/CopadoCon Logo_Blue and Black@2x.png'} alt="CopadoCon 2025 Logo" style={{ maxWidth: 250, width: '100%', marginBottom: 12 }} />

          <div style={{ fontSize: '1.2rem', color: '#555', marginBottom: 24 }}>Date: To be announced</div>
        </div>
        <CopadoConNav />
        <div style={{ marginTop: 32 }}>
          <Switch>
            <Route exact path={`${path}/about`} component={About} />
            <Route exact path={`${path}/sponsors`} component={Sponsors} />
            <Route exact path={`${path}/agenda`} component={Agenda} />
            <Route exact path={`${path}/speakers`} component={Speakers} />
            <Route exact path={`${path}/others`} component={Others} />
            <Redirect to={`${path}/about`} />
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default CopadoCon2025;
