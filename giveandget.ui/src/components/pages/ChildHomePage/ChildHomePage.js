import React from 'react';
import PropTypes from 'prop-types';
import './ChildHomePage.scss';
import ChildHomepageCard from '../../shared/ChildHomepageCard/ChildHomepageCard';

class ChildHomePage extends React.Component {
  
  static propTypes = {
    userId: PropTypes.number,
  }

  
  

  render() {
    const { user } = this.props;
    return (
      <div className="ChildHomePage">
        <ChildHomepageCard user= {user}/>
      </div>
    );
  }
}

export default ChildHomePage;