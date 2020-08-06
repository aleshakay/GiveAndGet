import React from 'react';
import PropTypes from 'prop-types';
import ChoreForm from '../../shared/ChoreForm/ChoreForm';

import './NewChore.scss';

class NewChore extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
  }



  render() {
    return (
      <div className="NewChore">
        <h1 className="ChoreNameTitle">Add Chores</h1>
        <ChoreForm />
      </div>
    );
  }
}

export default NewChore;
