import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';
import Footer from './layout/Footer';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;