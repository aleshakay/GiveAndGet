import React from 'react';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  ButtonGroup,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './FamilyHomePageCard.scss';

class FamilyHomepageCard extends React.Component {
  
  render() {
    const { user } = this.props;
    return (
      <div className="familyHomepageCard">
        <Card>
          <CardTitle>Welcome {user.firstName}</CardTitle>
          <CardBody>
            <ButtonGroup vertical className="familyHomeButtons" >
              <Button>Family</Button>
              <Button><Link to={`/newChore`}>Chores</Link></Button>
              <Button><Link to={`/newReward`}>Rewards</Link></Button>
            </ButtonGroup>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default FamilyHomepageCard;