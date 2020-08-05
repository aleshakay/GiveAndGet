import React from 'react';
import { Button } from 'reactstrap';

import './RewardButtons.scss';

class RewardButtons extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.id);
  }

  render() {
    const { potentialReward } = this.props;
    return (
      <div>
        <Button className="PotenitalRewards" id={`${potentialReward.rewardId}`} onClick={this.handleClick}>{potentialReward.name}  {potentialReward.rewardValue}</Button>
      </div>
    );
  }
}

export default RewardButtons;