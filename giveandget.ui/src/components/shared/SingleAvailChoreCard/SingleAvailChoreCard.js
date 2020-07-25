import React from 'react';

import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { withRouter } from 'react-router';


import choreData from '../../../helpers/data/choreData';

import './SingleAvailChoreCard.scss';

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

  render() {
    const { singleChore } = this.props;
    return (
      <div className="SingleAvailChoreCard">
        <Card>
          <CardTitle>Chore Name: {singleChore.name}</CardTitle>
            <CardText>{singleChore.picture}</CardText>
            <CardText>Chore Description: {singleChore.choreDescription}</CardText>
            <CardText>Chore Value: {singleChore.choreValue}</CardText>
            <Button onClick={this.chooseChore}>Choose</Button>
        </Card>

      </div>
    );
  }
}

export default withRouter (SingleAvailChoreCard);