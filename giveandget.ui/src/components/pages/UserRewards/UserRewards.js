import React from 'react';
import userData from '../../../helpers/data/userData';
import UserRewardsCircle from '../../shared/UserRewardsCircle/UserRewardsCircle';
import rewardData from '../../../helpers/data/rewardData';
import RewardButtons from '../../shared/RewardButtons/RewardButtons';
import './UserRewards.scss';

class UserReward extends React.Component {
  state = {
    totalUserPoints: 0,
    userRewardInfo: {},
    potentialRewards: [],
    }

    getAllUserPoints = () => {
      const userId = sessionStorage.getItem('userId');
      userData.getUserById(userId)
        .then((response) => this.setState({ userRewardInfo: response }))
        .catch((err) => console.error('error while getting user points', err));
    }

    getAllAvailRewards = () => {
      rewardData.getAllAvailableRewards()
        .then((response) => this.setState({ potentialRewards: response }))
        .catch((err) => console.error(err));
    }
    
    cashInPoints = (rewardId) => {
      const userId = sessionStorage.getItem('userId');
      rewardData.UpdateRewards(userId, rewardId)
        .then((response) => this.setState({ rewardsAddedToUser: response }))
        .catch((err) => console.error(err))
        .then(()=> this.props.history.push('/'))
    }

    onSelect = (id) => {
      const rewardId = id;
      this.cashInPoints(rewardId);
    }

    componentDidMount(){
      this.getAllUserPoints();
      this.getAllAvailRewards();
      //this.cashInPoints();
    }

  render() {
    const { userRewardInfo, potentialRewards } = this.state;
    const totalUserPoints = userRewardInfo.choreRewardPoint;
    console.log(this.state.potentialRewards)
    return (
      <div className="UserRewards">
        <h1>Reward Points</h1>
        <UserRewardsCircle userRewardInfo={userRewardInfo} totalUserPoints={totalUserPoints} potentialRewards={potentialRewards}/>
        <div>
        {this.state.potentialRewards.map((potentialReward) => (<RewardButtons key={potentialReward.rewardId} potentialReward={potentialReward} onSelect={this.onSelect} />))} 
        </div>
      </div>
    );
  }
}

export default UserReward;
