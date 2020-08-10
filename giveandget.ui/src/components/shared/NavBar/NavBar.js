import React from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';

import './NavBar.scss';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MainContainer">
        <header>
          <div className="topnav" id="myTopnav">
            <a href="/">HomePage</a>
            <a href="/chores">Chores</a>
            <a href="/rewards">Rewards</a>
            <a href="/dashboard">Dashboard</a>
            {/* <button className="btn btn-danger" onClick={this.logMeOut}>Log Me Out</button> */}
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;