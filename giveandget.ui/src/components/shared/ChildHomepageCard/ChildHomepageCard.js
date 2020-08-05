import React from 'react';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ChildHomepageCard.scss';

class ChildHomepageCard extends React.Component {
  
  render() {
    const { user } = this.props;
    return (
      <div className="ChildHomepageCard">
        <Card >
          <CardTitle className="ChildHomepageCardSection">Welcome {user.firstName}</CardTitle>
          <CardBody className="ChildHPBody">
            <Col><Button className="ChildHPBtn" md={{ size: 6, offset: 3 }}><Link to={`/chores`}>Chores</Link></Button></Col>
            <Button className="ChildHPBtn"><Link to={`/pendingChores`}>PendingChores</Link></Button>
            <Col><Button className="ChildHPBtn"><Link to={`/myrewards`}>Rewards</Link></Button></Col>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ChildHomepageCard;