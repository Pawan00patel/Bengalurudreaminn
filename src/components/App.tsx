import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import CoreTeam from './sections/CoreTeam';


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coreteam" component={CoreTeam} />
        </Switch>
        <Footer />

      </div>
    </Router>
  );
};

export default App;