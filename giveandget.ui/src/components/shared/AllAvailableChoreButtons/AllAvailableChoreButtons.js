import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class AllAvailableChoreButtons extends React.Component {
  render() {
    const {chore} = this.props;
    return (
      <div>
        <Button><Link to ={`/chore/${chore.choreId}`}>{chore.name}</Link></Button>
      </div>
    );
  }
}

export default AllAvailableChoreButtons;