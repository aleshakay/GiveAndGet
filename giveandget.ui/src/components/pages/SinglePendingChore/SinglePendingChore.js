import React from 'react';
import PendingChoreCard from '../../shared/PendingChoreCard/PendingChoreCard';
import choreData from '../../../helpers/data/choreData';
import './SinglePendingChore.scss';

class SinglePendingChore extends React.Component {
  state = {
    pendingChore : {},
  }

 

  componentDidMount() {
    const pendingChoreId = this.props.match.params.pendingChoreId;
    choreData.getChoreById(pendingChoreId)
      .then((response) => {
        this.setState({ pendingChore: response })
    })
      .catch((err) => console.error('error in get pendingChore', err));
  }

  render() {
    const { pendingChore } = this.state;
    console.log(pendingChore, "in single pending chore.js")
    return (
      <div>
       <PendingChoreCard pendingChore={pendingChore} />
      </div>
    );
  }
}

export default SinglePendingChore;