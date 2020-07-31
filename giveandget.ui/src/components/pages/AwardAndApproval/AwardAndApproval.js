import React from 'react';
import AwardAndApprovalCard from '../../shared/AwardAndApprovalCard/AwardAndApprovalCard';
import choreData from '../../../helpers/data/choreData';
import './AwardAndApproval.scss';

class AwardAndApproval extends React.Component {
  state = {
    parentsPendingChore : {},
  }

  componentDidMount() {
    const parentsPendingChoreId = this.props.match.params.parentsPendingChoreId;
    choreData.getChoreById(parentsPendingChoreId)
      .then((response) => {
        this.setState({ parentsPendingChore: response })
        console.log(this.state.parentsPendingChore)
    })
      .catch((err) => console.error('error in get parentsPendingChore', err));
  }

  render() {
    const { parentsPendingChore } = this.state;
    console.log(parentsPendingChore, "in single pending chore.js")
    return (
      <div>
       <AwardAndApprovalCard parentsPendingChore={parentsPendingChore} />
      </div>
    );
  }
}

export default AwardAndApproval;