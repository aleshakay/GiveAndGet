import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  render(){
    return (
      <div className="MainContainer">
        <header>
          <div className="navbar" id="myNavBar">
            <a href="#">Home</a>
            <a href="/chores">Chores</a>
            <a href="/rewards">Rewards</a>
            <a href="#Dashboard">Dashboard</a>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;