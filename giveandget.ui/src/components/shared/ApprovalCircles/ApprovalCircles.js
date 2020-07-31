import React from 'react';

import './ApprovalCircles.scss'

class ApprovalCircles extends React.Component {

  handleClick= (e) => {
    e.preventDefault();
    this.props.onSelect(e.target.id);
  }

  render() {
    const { familyCount, parentsPendingChores} = this.props;
    return (
      <div>
        <button id ={`${parentsPendingChores}`} className= 'button button5' onClick={this.handleClick}>{familyCount}</button>
      </div>
    );
  }
}

export default ApprovalCircles;