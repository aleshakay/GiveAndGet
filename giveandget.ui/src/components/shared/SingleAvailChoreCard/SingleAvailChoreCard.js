import React from 'react';

import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import choreData from '../../../helpers/data/choreData';

import './SingleAvailChoreCard.scss';

class SingleAvailChoreCard extends React.Component {
  chooseChore = (e) => {
    debugger
    e.preventDefault();
    const { singleChore } = this.props;
    choreData.updateChoreUserId(singleChore.choreId, singleChore.userId)
      .then((response) => this.setState({ singleChore: response }))
      .catch((err) => console.error('error in single available chore card', err));
  }

  render() {
    const { singleChore } = this.props;
    return (
      <div className="SingleAvailChoreCard">
        <Card>
          <CardTitle>{singleChore.name}</CardTitle>
            <CardText>{singleChore.picture}</CardText>
            <CardText>{singleChore.description}</CardText>
            <CardText>{singleChore.value}</CardText>
            <Button><Link to ={`/chore/${singleChore.choreId}`} onClick={this.chooseChore}>Choose</Link></Button>
        </Card>

      </div>
    );
  }
}

export default SingleAvailChoreCard;