import React from 'react';

import './UserCircles.scss'

class UserCircles extends React.Component {
  render() {
    const { allCompletedChore } = this.props;
    return (
    <button className="button button5" >{allCompletedChore.name}</button>
    );
  }
}

export default UserCircles;