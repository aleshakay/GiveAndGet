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
import './SingleAvailChoreCard.scss';

class SingleAvailChoreCard extends React.Component {
  render() {
    const { singleChore } = this.props;
    return (
      <div className="SingleAvailChoreCard">
        <Card>
          <CardTitle>{singleChore.name}</CardTitle>
          <CardText>{singleChore.picture}</CardText>
          <CardBody>
          <CardText>{singleChore.description}</CardText>
          <CardText>{singleChore.value}</CardText>
            <Button><Link to ={`/chore/${singleChore.choreId}`}>Choose</Link></Button>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default SingleAvailChoreCard;