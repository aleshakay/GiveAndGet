import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import NavBar from '../components/shared/NavBar/NavBar';
import Chores from '../components/pages/AvailableChores/AvailableChores';
import HomePage from '../components/pages/HomePage/HomePage';
import NewChore from '../components/pages/NewChore/NewChore';
import PendingChores from '../components/pages/PendingChores/PendingChores'
import SingleAvailChore from '../components/pages/SingleAvailChore/SingleAvailChore';
import SinglePendingChore from '../components/pages/SinglePendingChore/SinglePendingChore';
import NewReward from '../components/pages/NewReward/NewReward';
import AllReward from '../components/pages/AllRewards/AllRewards';
import Dashboard from '../components/pages/FamilyDashboard/FamilyDashboard';
import CompletedChoreButtons from '../components/shared/CompletedChoreButtons/CompletedChoreButtons';
import ApprovalQueue from '../components/pages/ApprovalQueue/ApprovalQueue';
import AwardAndApproval from '../components/pages/AwardAndApproval/AwardAndApproval';
import Auth from '../components/pages/Auth/Auth';
import Register from '../components/pages/Register/Register';
import fbConnection from '../helpers/data/connection';
import './App.scss';
import NewFamilyMember from '../components/pages/NewFamilyMember/NewFamilyMember';
import UserReward from '../components/pages/UserRewards/UserRewards';
fbConnection();
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

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <NavBar authed={authed}/>
          <Switch>
            <PublicRoute path="/" exact component={HomePage} authed={authed} />
            {/* <PublicRoute path="/auth" exact component={Auth} authed={authed} /> */}
            <PublicRoute path="/chores" exact component={Chores} authed={authed} />
            <PublicRoute path="/newUser" exact component={NewFamilyMember} authed={authed} />
            <PublicRoute path="/chore/:choreId" exact component={SingleAvailChore} authed={authed} />
            <PublicRoute path="/finishedChore/:pendingChoreId" exact component={SinglePendingChore} authed={authed} />
            <PublicRoute path="/approvedChore/:parentsPendingChoreId" exact component={AwardAndApproval} authed={authed} />
            <PublicRoute path="/newChore" exact component={NewChore} authed={authed} />
            <PublicRoute path="/newReward"  exact component={NewReward} authed={authed} />
            <PublicRoute path="/pendingChores" exact component={PendingChores} authed={authed} />
            <PublicRoute path="/rewards"  exact component={AllReward} authed={authed} />
            <PublicRoute path="/pendingapprovals"  exact component={ApprovalQueue} authed={authed} />
            <PublicRoute path="/dashboard" exact component={Dashboard} authed={authed} />
            <PublicRoute path="/allcompleted/:allCompletedChoreId" exact component={CompletedChoreButtons} authed={authed} />
            <PublicRoute path="/myrewards"  exact component={UserReward} authed={authed} />
            {/* <PublicRoute path="/reward/rewardId"  exact component={AllReward} authed={authed} /> */}

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;