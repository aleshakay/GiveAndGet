import React from 'react';
import UserCircles from '../UserCircles/UserCircles';
import choreData from '../../../helpers/data/choreData';

import './DashboardCard.scss'

class DashboardCard extends React.Component {
  state = {
    allCompletedChores: [],
  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    choreData.GetCompletedChoresByUserId(userId)
      .then((response) => {
        this.setState({ allCompletedChores: response })
      })
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <div>
        {this.state.allCompletedChores.map((allCompletedChore) => (<UserCircles key={allCompletedChore.allCompletedChoreId} allCompletedChore={allCompletedChore}/>))}
      </div>
    );
  }
}

export default DashboardCard;