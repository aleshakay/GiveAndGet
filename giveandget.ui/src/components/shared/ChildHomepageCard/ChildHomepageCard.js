import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, 
  CardBody,
  Button,
  CardTitle,
} from 'reactstrap';
import './ChildHomepageCard.scss';

class ChildHomepageCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="ChildHomepageCard">
        <Card>
          <CardTitle>Welcome {user.firstName}</CardTitle>
          <CardBody>
            <Button>Chores</Button>
            <Button>Rewards</Button>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default ChildHomepageCard;