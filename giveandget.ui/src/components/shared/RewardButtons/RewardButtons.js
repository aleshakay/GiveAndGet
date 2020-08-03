import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './RewardButtons.scss';

class RewardButtons extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    debugger
    this.props.onSelect(e.target.id);
  }

  render() {
    const { potentialReward } = this.props;
    return (
      <div>
        <Button id={`${potentialReward.rewardId}`} onClick={this.handleClick}>{potentialReward.name}  {potentialReward.rewardValue}</Button>
      </div>
    );
  }
}

export default RewardButtons;