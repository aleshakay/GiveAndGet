import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './ApprovalChoreButtons.scss';

class ApprovalChoreButtons extends React.Component {
  render() {
    const { parentsPendingChore } = this.props;
    return (
      <div>
        <Button className="ApprovalChoreBtn"><Link to ={`/approvedChore/${parentsPendingChore.choreId}`}>{parentsPendingChore.name}</Link></Button>
      </div>
    );
  }
}

export default ApprovalChoreButtons;