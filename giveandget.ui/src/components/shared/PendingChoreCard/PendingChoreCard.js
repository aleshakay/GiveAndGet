import React from 'react';

import {
  Card, 
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import choreData from '../../../helpers/data/choreData';
import { withRouter } from 'react-router';
import './PendingChoreCard.scss';

class PendingChoreCard extends React.Component {
  choreFinished = (e) => {
    e.preventDefault();
    const { pendingChore } = this.props;
    choreData.finishedChore(pendingChore.choreId)
      .then((response) => this.setState({ pendingChore: response }))
      .catch((err) => console.error('error in single pending chore card', err))
      .then(() => this.props.history.push('/'));
  }

  approveAndPoints = (e) => {
    this.props.history.push('/');
    //wip
  }


  render() {
    const { pendingChore } = this.props;
    const choreApproveOrComplete = this.props.pendingChore.completed
    let checkCompleteAndApproving;
    if (choreApproveOrComplete === true) {
      checkCompleteAndApproving = <Button onClick = {this.approveAndCloseMe}> Reward Points </Button> 
    } else {
      checkCompleteAndApproving = <Button onClick={this.choreFinished}>Mark Complete</Button>
    }
    return (
      <div className="PendingChoreCard">
        <Card>
          <CardTitle>{pendingChore.name}</CardTitle>
            <CardText>{pendingChore.picture}</CardText>
            <CardText>{pendingChore.choreDescription}</CardText>
            <CardText>{pendingChore.choreValue}</CardText>
            {checkCompleteAndApproving}
        </Card>

      </div>
    );
  }
}

export default withRouter (PendingChoreCard);