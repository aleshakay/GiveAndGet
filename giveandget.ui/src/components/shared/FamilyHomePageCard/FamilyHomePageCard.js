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
          <CardTitle className="FamilyHomePageTitle">Welcome {user.firstName}</CardTitle>
          <CardBody>
            <ButtonGroup vertical className="familyHomeBtnGroup" >
              <Button className='FamilyHomeButtons'  md={{ size: 6, offset: 3 }}><Link to={`/newUser`}>Family</Link></Button>
              <Button className='FamilyHomeButtons'  md={{ size: 6, offset: 3 }}><Link to={`/newChore`}>Chores</Link></Button>
              <Button className='FamilyHomeButtons'  md={{ size: 6, offset: 3 }}><Link to={`/newReward`}>Rewards</Link></Button>
              <Button className='FamilyHomeButtons'  md={{ size: 6, offset: 3 }}><Link to={`/pendingapprovals`}>Approvals</Link></Button>
            </ButtonGroup>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default FamilyHomepageCard;