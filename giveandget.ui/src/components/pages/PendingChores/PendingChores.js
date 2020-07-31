import React from 'react';
import choreData from '../../../helpers/data/choreData';
import PendingChoreButtons from '../../shared/PendingChoreButtons/PendingChoreButtons';
import './PendingChores.scss';

class PendingChores extends React.Component {
  state = {
    pendingChores: [],
  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    choreData.getAllChoresByUserId(Number(userId))
      .then((response) => this.setState({ pendingChores: response }))
      .catch((err) => console.error('error in get pendingChore', err));
  }

  render() {
    return (
      <div>
        <h1>Pending Chores</h1>
        {this.state.pendingChores.map((pendingChore) => (<PendingChoreButtons key={pendingChore.choreId} pendingChore={pendingChore} />))}
      </div>
    );
  }
}

export default PendingChores;