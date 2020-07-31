import React from 'react';
import choreData from '../../../helpers/data/choreData';
import ApprovalChoreButtons from '../../shared/ApprovalChoreButtons/ApprovalChoreButtons';
import ApprovalCircles from '../../shared/ApprovalCircles/ApprovalCircles';

class ApprovalQueue extends React.Component {
  state = {
    parentsPendingChores: [],
    familyCount: 0
    }

  GetPendingChoresByFamily = () => {
    const userId = sessionStorage.getItem('userId');
    choreData.GetPendingChoresByFamily(userId)
      .then((response) => this.setState({ parentsPendingChores : response }))
      .catch((err) => console.error('error from get rewards', err));
  }

  onSelect = (id) => {
    const familyMembersIdForAppvl = id;
    this.GetPendingChoresByFamily(familyMembersIdForAppvl);
  }

  componentDidMount(){
    this.GetPendingChoresByFamily();
  }

  render() {
    const { parentsPendingChores } = this.state;

    const familyCount = parentsPendingChores.length;
    return (
      <div className="ApprovalQueue">
        <h1>Pending Approval</h1>
        <ApprovalCircles onSelect={this.onSelect} parentsPendingChores={parentsPendingChores} familyCount={familyCount} />
        <div>
        {this.state.parentsPendingChores.map((parentsPendingChore) => (<ApprovalChoreButtons key={parentsPendingChore.choreId} parentsPendingChore={parentsPendingChore} />))}
        </div>
      </div>
    );
  }
}

export default ApprovalQueue;