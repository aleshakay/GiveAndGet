import React from 'react';
import choreData from '../../../helpers/data/choreData';
import './AvailableChores.scss';
import AllAvailableChoreButtons from '../../shared/AllAvailableChoreButtons/AllAvailableChoreButtons';

class AvailableChores extends React.Component {
  state = {
    chores: [],
  }

  getAllChores = () => {
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

export default AvailableChores;