import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './PendingChoreButtons.scss';

class PendingChoreButtons extends React.Component {
  render() {
    const {pendingChore} = this.props;
    console.log(pendingChore, "in pending chore button which should go to singlepending chore")
    return (
      <div>
        <Button><Link to ={`/finishedChore/${pendingChore.choreId}`}>{pendingChore.name}</Link></Button>
      </div>
    );
  }
}

export default PendingChoreButtons;