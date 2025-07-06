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
import Sponsors from './sections/Sponsors';
import SponsorPage from './sections/SponsorPage';
import Speakers from './sections/Speakers';
import Blog from './sections/Blog';
import BlogDetail from './sections/BlogDetail';
import Events from './sections/Events';



const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <div className="flex-grow-1">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/speakers" component={Speakers} />
            <Route path="/about" component={About} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route path="/sponsors/:sponsorId" component={SponsorPage} />
            <Route path="/our-team" component={OurTeam} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact-us" component={ContactUs} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogDetail} />
            <Route path="/events" component={Events} />
           
        
          </Switch>
        </div>
        <Footer />
      </div> 
    </Router>
  );
};

export default App;