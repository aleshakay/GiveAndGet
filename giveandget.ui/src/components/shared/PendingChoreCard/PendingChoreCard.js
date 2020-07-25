import React from 'react';

import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
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

  render() {
    const { pendingChore } = this.props;
    debugger
    return (
      <div className="PendingChoreCard">
        <Card>
          <CardTitle>{pendingChore.name}</CardTitle>
            <CardText>{pendingChore.picture}</CardText>
            <CardText>{pendingChore.choreDescription}</CardText>
            <CardText>{pendingChore.choreValue}</CardText>
            <Button onClick={this.choreFinished}>Finshed</Button>
        </Card>

      </div>
    );
  }
}

export default withRouter (PendingChoreCard);