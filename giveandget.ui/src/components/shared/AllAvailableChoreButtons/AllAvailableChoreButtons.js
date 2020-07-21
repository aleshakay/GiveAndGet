import React from 'react';


class AllAvailableChoreButtons extends React.Component {
  render() {
    const {chore} = this.props;
    return (
      <div>
        <button>{chore.name}</button>
      </div>
    );
  }
}

export default AllAvailableChoreButtons;