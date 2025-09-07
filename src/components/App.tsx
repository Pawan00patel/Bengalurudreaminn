import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Footer from './layout/Footer';
import About from './sections/About';
import Speakers from './sections/Speakers';
import Blog from './sections/Blog';
import BlogDetail from './sections/BlogDetail';
import Events from './sections/Events';
import SponsorsPage from './pages/SponsorsPage';
import BengaluruDreamin2025 from './pages/BengaluruDreamin2025';
import SponsorDetailPage from './pages/SponsorDetailPage';
           
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* CopadoCon2025 dedicated routes */}
        <Route
          exact
          path="/copadocon2025/sponsors"
          render={() => (
            <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
              {React.createElement(require('./sections/CopadoSponsor').default)}
            </div>
          )}
        />
        <Route
          exact
          path="/copadocon2025/speakers"
          render={() => (
            <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
              {React.createElement(require('./sections/CopadoConSpeaker').default)}
            </div>
          )}
        />
        <Route
          exact
          path="/copadocon2025/agenda"
          render={() => (
            <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
              {React.createElement(require('./sections/CopadoConAgenda').default)}
            </div>
          )}
        />
        {/* Main CopadoCon2025 landing page (with navigation, hero, about, etc.) */}
        <Route
          exact
          path="/copadocon2025"
          render={() => (
            <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
              {React.createElement(require('./pages/CopadoCon2025SingleNav').default)}
            </div>
          )}
        />
        {/* BengaluruDreamin routes (unchanged) */}
        <Route
          exact
          path="/BengaluruDreamin2025/event-founders/sponsors"
          render={() => (
            <div className="min-h-screen">
              <SponsorsPage />
            </div>
          )}
        />
        <Route
          path="/BengaluruDreamin2025/event-founders/sponsors/:sponsorId"
          render={() => (
            <div className="min-h-screen">
              <SponsorDetailPage />
            </div>
          )}
        />
        <Route
          path="/BengaluruDreamin2025"
          render={() => (
            <div className="min-h-screen">
              <BengaluruDreamin2025 />
            </div>
          )}
        />
        {/* Main site routes with header/footer */}
        <Route
          render={() => (
            <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
              <Header />
              <div className="flex-grow-1">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/speakers" component={Speakers} />
                  <Route path="/about" component={About} />
                  <Route path="/our-team" component={OurTeam} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/sponsors" component={SponsorsPage} />
                  <Route path="/contact-us" component={ContactUs} />
                  <Route exact path="/blog" component={Blog} />
                  <Route path="/blog/:slug" component={BlogDetail} />
                  <Route path="/events" component={Events} />
                </Switch>
              </div>
              <Footer />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;