import React from 'react';
import SingleAvailChoreCard from '../../shared/SingleAvailChoreCard/SingleAvailChoreCard';
import choreData from '../../../helpers/data/choreData';
import './SingleAvailChore.scss';

class SingleAvailChore extends React.Component {


  render() {
    const { chore } = this.props;
    return (
      <div>
       <SingleAvailChoreCard chore={chore}/>
      </div>
    );
  }
}

export default SingleAvailChore;