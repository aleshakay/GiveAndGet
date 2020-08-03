import React from 'react';
import PropTypes from 'prop-types';
import NewMemberForm from '../../shared/NewMemberForm/NewMemberForm';

import './NewFamilyMember.scss';

class NewFamilyMember extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
  }



  render() {
    return (
      <div>
        <NewMemberForm />
      </div>
    );
  }
}

export default NewFamilyMember;