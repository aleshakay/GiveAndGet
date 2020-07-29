import React from 'react';
import { withRouter } from 'react-router';
import UserCircles from '../UserCircles/UserCircles';
import userData from '../../../helpers/data/userData';
import choreData from '../../../helpers/data/choreData';
import CompletedChoreButtons from '../CompletedChoreButtons/CompletedChoreButtons';
import './DashboardCard.scss'
import AllAvailableChoreButtons from '../AllAvailableChoreButtons/AllAvailableChoreButtons';


class DashboardCard extends React.Component {
  state = {
    allFamilyNames: [],
    familyMembersCompletedChores:[]
  }

  getNames = () => {
      const userId = sessionStorage.getItem('userId');
      userData.getAllCCNamesPerFamily(userId)
      .then((response) => {
        this.setState({ allFamilyNames: response });
      })
      .catch((err) => console.error(err));
  }

  onSelect = (id) => {
    const familyMemberId = id;
    choreData.GetCompletedChoresByUserId(familyMemberId)
    .then((response) => 
      this.setState({ familyMembersCompletedChores: response }))
    .catch((err) => console.error(err))
  }

  componentDidMount() {
   this.getNames();
  }

  render() {
    return (
      <div>
        {this.state.allFamilyNames.map((allFamilyName) => (<UserCircles onSelect={this.onSelect} key={allFamilyName.userId} allFamilyName={allFamilyName} />))}
        <div>
        {this.state.familyMembersCompletedChores.map((allCompletedChore) => (<CompletedChoreButtons key={allCompletedChore.choreId} allCompletedChore={allCompletedChore} />))}
        </div>
      </div>
    );
  }
}

export default withRouter (DashboardCard);