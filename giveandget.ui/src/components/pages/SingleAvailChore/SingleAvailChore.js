import React from 'react';
import SingleAvailChoreCard from '../../shared/SingleAvailChoreCard/SingleAvailChoreCard';
import choreData from '../../../helpers/data/choreData';
import './SingleAvailChore.scss';

class SingleAvailChore extends React.Component {
  state = {
    singleChore : {},
  }

  getSingleChoreById = (singleChoreId) => {
    choreData.getChoreById(singleChoreId)
      .then((response) => this.setState({ singleChore: response }))
      .catch((err) => console.error('error in get singleChore', err));
  }

  componentDidMount() {
    const singleChoreId = this.props.match.params.choreId;
    this.getSingleChoreById(singleChoreId);
  }

  render() {
    const { singleChore } = this.state;
    return (
      <div className="SingleAvailChoreCard">
       <SingleAvailChoreCard singleChore={singleChore} />
      </div>
    );
  }
}

export default SingleAvailChore;