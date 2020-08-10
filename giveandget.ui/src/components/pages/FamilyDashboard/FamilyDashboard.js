import React from 'react';
import DashboardCard from '../../shared/DashboardCard/DashboardCard';
import './FamilyDashboard.scss'

class FamilyDashboard extends React.Component {
  

  render() {
    return (
      <div className="Dashboard">
        <DashboardCard  />
      </div>
    );
  }
}

export default FamilyDashboard;