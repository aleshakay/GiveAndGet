import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Col, Button, Form, FormGroup, Label, Row, Input,
} from 'reactstrap';
import rewardData from '../../../helpers/data/rewardData';
import { getCurrentDate } from '../../../helpers/utils';
import './NewRewardCard.scss';

class NewRewardCard extends React.Component {
  state = {
    name: '',
    enteredDate: '',
    picture: '',
    rewardValue: '',
    rewardAvailable: true
  }

  handleFieldChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    const stateToChange = {};
    stateToChange[e.target.id] = e.target.value;

    this.setState(stateToChange);
  }

  saveRewardCard = (e) => {
    e.preventDefault();
    const rewardObj =  {
      name: this.state.name,
      enteredDate: getCurrentDate("-"),
      picture: this.state.picture,
      rewardValue: Number(this.state.rewardValue),
      rewardAvailable: this.state.rewardAvailable,
    };
    rewardData.addReward(rewardObj)
    .then(() => this.props.history.push('/'))
    .catch((err) => console.error('error from save reward', err));
  }


  render() {
    return (
      <div>
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='rewardName'>Name of Reward</Label>
              <Input 
              type="text" 
              className='rewardName' 
              id='name' 
              placeholder=""

              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="rewardDescription">Description of Chore</Label>
              <Input 
              type="text" 
              className="choreDescription"
              id="choreDescription"
              placeholder=""
              
              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="rewardPicture">Picture for Chore</Label>
          <Input 
          type="text" 
          className="rewardPicture"
          id="picture"
          placeholder="https://animals.com"

          onChange={this.handleFieldChange} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="rewardValue">Reward Value</Label>
          <Input
           type="text" 
           className="rewardValue" 
           id="rewardValue" 
           placeholder="2"

           onChange={this.handleFieldChange}
           />
        </FormGroup>
        <Button className="RewardSubmit" onClick={this.saveRewardCard}>Submit Reward</Button>
      </Form> 
      </div>
    );
  }
}

export default withRouter (NewRewardCard);
