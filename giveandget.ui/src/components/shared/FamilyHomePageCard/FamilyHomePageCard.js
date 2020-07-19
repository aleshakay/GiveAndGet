import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  ButtonGroup,
} from 'reactstrap';
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
              <Button>Chores</Button>
              <Button>Rewards</Button>
            </ButtonGroup>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default FamilyHomepageCard;