import React from 'react';
import PropTypes from 'prop-types';
import NewRewardCard from '../../shared/NewRewardCard/NewRewardCard';

import './NewReward.scss';

class NewReward extends React.Component {
  static propTypes = {
    userId: PropTypes.number
  }

  render() {
    return (
      <div className="NewReward">
        <h1 className="NewRewardTitle">New Reward</h1>
        <NewRewardCard />
      </div>
    );
  }
}

export default NewReward;
