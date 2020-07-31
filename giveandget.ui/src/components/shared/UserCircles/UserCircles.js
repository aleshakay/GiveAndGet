import React from 'react';
import './UserCircles.scss'

class UserCircles extends React.Component {
  state = {
    allCompletedChores: [],
  }

  handleClick= (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.id);
  }

  render() {
    const { allFamilyName } = this.props;
    return (
      <div>
        <button id ={`${allFamilyName.userId}`} className= 'button button5' onClick={this.handleClick} >{allFamilyName.firstName}</button>
      </div>
    );
  }
}

export default UserCircles;