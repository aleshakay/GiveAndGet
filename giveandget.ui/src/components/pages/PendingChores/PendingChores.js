import React from 'react';
import choreData from '../../../helpers/data/choreData';

import AllAvailableChoreButtons from '../../shared/AllAvailableChoreButtons/AllAvailableChoreButtons';
import './PendingChores.scss';

class PendingChores extends React.Component {
  state = {
    chores: [],
  }

  getAllPending = () => {
    choreData.getChores()
      .then((chores) =>{
        this.setState({ chores });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount(){
    this.getAllChores();
  }

  render() {
    return (
      <div>
        <h1>All Chores</h1>
        {this.state.chores.map((chore) => (<AllAvailableChoreButtons key={chore.choreId} chore={chore} />))}
      </div>
    );
  }
}

export default PendingChores;