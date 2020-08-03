import React from 'react';

class UserRewardsCircle extends React.Component {

  handleClick= (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.id);
  }

  render() {
    const { totalUserPoints, userRewardInfo } = this.props;
    return (
      <div>
        <button id ={`${userRewardInfo.userId}`} className= 'button button5' onClick={this.handleClick}>{totalUserPoints}</button>
      </div>
    );
  }
}

export default UserRewardsCircle;