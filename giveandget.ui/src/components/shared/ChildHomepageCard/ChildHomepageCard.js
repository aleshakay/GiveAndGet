import React from 'react';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './ChildHomepageCard.scss';

class ChildHomepageCard extends React.Component {
  
  render() {
    const { user } = this.props;
    return (
      <div className="ChildHomepageCard">
        <Card>
          <CardTitle>Welcome {user.firstName}</CardTitle>
          <CardBody>
            <Button><Link to={`/chores`}>Chores</Link></Button>
            <Button><Link to={`/pendingChores`}>PendingChores</Link></Button>
            <Button><Link to={`/myrewards`}>Rewards</Link></Button>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default ChildHomepageCard;