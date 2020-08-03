import React from 'react';

import {
  Card, 
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import choreData from '../../../helpers/data/choreData';
import { withRouter } from 'react-router';
import './AwardAndApprovalCard.scss';


class AwardAndApprovalCard extends React.Component {
  state = {
    newChoreRewardPoint: 0,
    parentApprovalTask: {},
  }
  approveAndPoints = (e) => {
    e.preventDefault();
    const { parentsPendingChore } = this.props;
    choreData.updateApprovalAndPoints(parentsPendingChore.choreId, parentsPendingChore.choreValue, parentsPendingChore.userId)
      .then((response) => this.setState({ parentsPendingChore: response }))
      .catch((err) => console.error('error in parentsPendingChore card', err))
      .then(() => this.props.history.push('/'));
  }

  render() {
    const { parentsPendingChore } = this.props;
    return (
      <div className="AwardAndApprovalCard">
        <Card>
          <CardTitle>{parentsPendingChore.name}</CardTitle>
            <CardText>{parentsPendingChore.picture}</CardText>
            <CardText>{parentsPendingChore.choreDescription}</CardText>
            <CardText>{parentsPendingChore.choreValue}</CardText>
            <Button onClick = {this.approveAndPoints}> Approval Chore</Button> 
        </Card>
      </div>
    );
  }
}

export default withRouter (AwardAndApprovalCard);