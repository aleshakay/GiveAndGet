import React from 'react';

class UserRewardsCircle extends React.Component {


  render() {
    const { totalUserPoints, userRewardInfo } = this.props;
    return (
      <div>
        <button id ={`${userRewardInfo.userId}`} className= 'UserRewardCircle button button5'>{totalUserPoints}</button>
      </div>
    );
  }
}

export default UserRewardsCircle;