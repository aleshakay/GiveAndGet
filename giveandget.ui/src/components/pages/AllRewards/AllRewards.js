import React from 'react';
import { Table } from 'reactstrap';
import AllRewardsTable from '../../shared/AllRewardsTable/AllRewardsTable';
import rewardData from '../../../helpers/data/rewardData';
import './AllRewards.scss';

class AllRewards extends React.Component {
  state = {
    rewards: [],
  }

  getRewards = () => {
    rewardData.getAllRewards()
      .then((rewards) => this.setState({ rewards }))
      .catch((err) => console.error('error from get rewards', err));
  }

  componentDidMount(){
    this.getRewards();
  }

  render() {
    return (
      <div className="AllRewards">
      <h1>All Rewards</h1> 
      <Table bordered responsive className="eventable">
          <thead>
            <tr className="allRewardsHeader">
              <th>Name</th>
              <th>Value</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.rewards.map((reward) => <AllRewardsTable key={reward.rewardId} reward={reward} />)}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AllRewards;