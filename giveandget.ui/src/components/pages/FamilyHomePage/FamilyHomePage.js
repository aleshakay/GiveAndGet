import React from 'react';
import PropTypes from 'prop-types';
import FamilyHomePageCard from '../../shared/FamilyHomePageCard/FamilyHomePageCard';

import './FamilyHomePage.scss';

class FamilyHomePage extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
  }

  render() {
    const { user } = this.props;
    return (
      <div className="FamilyHomePage"> 
        <FamilyHomePageCard user= {user}/>
      </div>
    );
  }
}

export default FamilyHomePage;