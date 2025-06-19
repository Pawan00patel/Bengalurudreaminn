import React from 'react';
import { Route, Switch, NavLink, useRouteMatch, Redirect } from 'react-router-dom';
import EventFounders from '../sections/EventFounders';
import AdvisoryTeam from '../sections/AdvisoryTeam';
import CoreTeam from '../sections/CoreTeam';
import Volunteers from '../sections/Volunteers';


const OurTeamPage: React.FC = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Team</h1>
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={`${url}/event-founders`}>
            Event Founders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={`${url}/advisory-team`}>
            Advisory Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={`${url}/core-team`}>
            Core Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={`${url}/volunteers`}>
            Volunteers
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/event-founders`} />
        </Route>
        <Route path={`${path}/event-founders`} component={EventFounders} />
        <Route path={`${path}/advisory-team`} component={AdvisoryTeam} />
        <Route path={`${path}/core-team`} component={CoreTeam} />
        <Route path={`${path}/volunteers`} component={Volunteers} />
      </Switch>
    </div>
  );
};

export default OurTeamPage;
