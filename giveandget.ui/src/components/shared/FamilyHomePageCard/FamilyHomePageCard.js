import React from 'react';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  ButtonGroup,
  Row,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './FamilyHomePageCard.scss';

class FamilyHomepageCard extends React.Component {
  
  render() {
    const { user } = this.props;
    return (
      <div className="familyHomepageCard">
        <Card className="border-animation">
          <CardTitle className="FamilyHomePageTitle">Welcome {user.firstName}</CardTitle>
          <CardBody>
            <ButtonGroup className="familyHomeBtnGroup" >
              <Row>
                <Button className='FamilyHomeButtons' sm="12" md={{ size: 6, offset: 3 }}><Link to={`/newUser`}>Family</Link></Button>
              </Row>
              <Row>
                <Button className='FamilyHomeButtons' sm="12" md={{ size: 6, offset: 3 }}><Link to={`/newChore`}>Chores</Link></Button>
              </Row>
              <Row>
                <Button className='FamilyHomeButtons' sm="12" md={{ size: 6, offset: 3 }}><Link to={`/newReward`}>Rewards</Link></Button>
              </Row>
              <Row>
                <Button className='FamilyHomeButtons' sm="12" md={{ size: 6, offset: 3 }}><Link to={`/pendingapprovals`}>Approvals</Link></Button>
              </Row>
            </ButtonGroup>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default FamilyHomepageCard;