import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './CompletedChoreButtons.scss';

class CompletedChoreButtons extends React.Component {
  render() {
    const { allCompletedChore } = this.props;
    return (
      <div>
        <Button className="AllCompletedChoreBtn"><Link to ={`/chore/${allCompletedChore.choreId}`}>{allCompletedChore.name}</Link></Button>
      </div>
    );
  }
}

export default CompletedChoreButtons;