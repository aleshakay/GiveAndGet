import React from 'react';
import { Table } from 'reactstrap';

class AllRewardsTable extends React.Component {
  render() {
    const { reward } = this.props;
    return (
      <tr className="AllRewardTable">
        <th scope="row">{reward.name}</th>
        <td>{reward.rewardValue}</td>
        <td>{reward.rewardAvailable.toString()}</td>
      </tr>
    );
  }
}    

export default AllRewardsTable;
