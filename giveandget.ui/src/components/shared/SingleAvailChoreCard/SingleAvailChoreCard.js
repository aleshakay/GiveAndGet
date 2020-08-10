import React from 'react';

import {
  Card, 
  Button,
  CardTitle,
  CardText,
} from 'reactstrap';
import { withRouter } from 'react-router';


import choreData from '../../../helpers/data/choreData';

import './SingleAvailChoreCard.scss';
import userData from '../../../helpers/data/userData';

class SingleAvailChoreCard extends React.Component {
  chooseChore = (e) => {
    e.preventDefault();
    const { singleChore } = this.props;
    const userId = sessionStorage.getItem('userId');
    choreData.updateChoreUserId(singleChore.choreId, userId)
      .then((response) => this.setState({ singleChore: response }))
      .catch((err) => console.error('error in single available chore card', err))
      .then(() => this.props.history.push('/'));
  }
  closeMe = () => {
    this.props.history.push('/');
  }

  render() {
    const { singleChore } = this.props;
    const choreCompletedAndApproved = this.props.singleChore.choreApproved
    let checkCompleteAndApproved;
    if (choreCompletedAndApproved === true && singleChore.userId == 1) {
      checkCompleteAndApproved = <Button className="ButtonSingleAvail" onClick = {this.closeMe}> Close </Button> 
    } else {
      checkCompleteAndApproved = <Button className="ButtonSingleAvail" onClick={this.chooseChore}>Choose</Button>
    }
    return (
      <div className="SingleAvailChoreCard">
        <Card>
          <CardTitle>Chore Name: {singleChore.name}</CardTitle>
            <CardText>{singleChore.picture}</CardText>
            <CardText>Chore Description: {singleChore.choreDescription}</CardText>
            <CardText>Chore Value: {singleChore.choreValue}</CardText>
            {checkCompleteAndApproved}
        </Card>

      </div>
    );
  }
}

export default withRouter (SingleAvailChoreCard);