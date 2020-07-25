import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './PendingChoreButtons.scss';

class PendingChoreButtons extends React.Component {
  render() {
    const {pendingChore} = this.props;
    return (
      <div>
        <Button><Link to ={`/pendingChores/${pendingChore.pendingChoreId}`}>{pendingChore.name}</Link></Button>
      </div>
    );
  }
}

export default PendingChoreButtons;