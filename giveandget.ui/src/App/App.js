import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NavBar from '../components/shared/NavBar/NavBar';
import Chores from '../components/pages/Chores/Chores';
import HomePage from '../components/pages/HomePage/HomePage';

import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar authed={authed}/>
          <Switch>
            <PublicRoute path="/" exact component={HomePage} authed={authed}/>
            <PublicRoute path="/chores" exact component={Chores} authed={authed}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;