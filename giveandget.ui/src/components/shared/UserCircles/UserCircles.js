import React from 'react';

import choreData from '../../../helpers/data/choreData';
import { Link } from 'react-router-dom';
import './UserCircles.scss'
import CompletedChoreButtons from '../CompletedChoreButtons/CompletedChoreButtons';

class UserCircles extends React.Component {
  state = {
    allCompletedChores: [],
  }



  handleClick= (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.id);
  }

  render() {
    const { allFamilyName, getSingleCompletedTaskByUID } = this.props;
    return (
      <div>
        <button id ={`${allFamilyName.userId}`} className= 'button button5' onClick={this.handleClick} >{allFamilyName.firstName}</button>
      </div>
    );
  }
}

export default UserCircles;