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
        <ChoreForm />
      </div>
    );
  }
}

export default NewChore;
