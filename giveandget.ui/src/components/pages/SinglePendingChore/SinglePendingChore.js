import React from 'react';
import PendingChoreCard from '../../shared/PendingChoreCard/PendingChoreCard';
import choreData from '../../../helpers/data/choreData';
import './SinglePendingChore.scss';

class SinglePendingChore extends React.Component {
  state = {
    pendingChore : {},
  }

  getSinglePendingChoreById = (pendingChoreId) => {
    choreData.getAllChoresByUserId(pendingChoreId)
      .then((response) => this.setState({ pendingChore: response }))
      .catch((err) => console.error('error in get pendingChore', err));
  }

  componentDidMount() {
    const pendingChoreId = this.props.match.params.choreId;
    this.getSinglePendingChoreById(pendingChoreId);
  }

  render() {
    const { pendingChore } = this.state;
    return (
      <div>
       <PendingChoreCard  pendingChore={pendingChore} />
      </div>
    );
  }
}

export default SinglePendingChore;