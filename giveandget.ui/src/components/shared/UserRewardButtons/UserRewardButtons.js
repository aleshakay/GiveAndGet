import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class UserRewardButtons extends React.Component {
  render() {
    const {userRewardInfo} = this.props;
    return (
      <div>
        <Button><Link to ={`/userRewardInfo/${userRewardInfo.rewardId}`}>{userRewardInfo.name}</Link></Button>
      </div>
    );
  }
}

export default UserRewardButtons;