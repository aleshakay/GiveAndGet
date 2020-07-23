import React from 'react';
import PropTypes from 'prop-types';

import './NewChore.scss';
import ChoreForm from '../../shared/ChoreForm/ChoreForm';

class NewChore extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
  }



  render() {
    return (
      <div>
        < ChoreForm />
      </div>
    );
  }
}

export default NewChore;
