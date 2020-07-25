import React from 'react';
import choreData from '../../../helpers/data/choreData';
import PendingChoreButtons from '../../shared/PendingChoreButtons/PendingChoreButtons';
import './PendingChores.scss';

class PendingChores extends React.Component {
  state = {
    pendingChores: [],
  }

  getAllPending = () => {
    const userId = sessionStorage.getItem('userId');
    choreData.getAllChoresByUserId(userId)
      .then((response) => this.setState({ pendingChores: response }))
      .catch((err) => console.error('error in get pendingChore', err));
  }

  componentDidMount(){
    this.getAllPending();
  }

  render() {
    return (
      <div>
        <h1>Pending Chores</h1>
        {this.state.pendingChores.map((pendingChore) => (<PendingChoreButtons key={pendingChore.pendingChoreId} pendingChore={pendingChore} />))}
      </div>
    );
  }
}

export default PendingChores;