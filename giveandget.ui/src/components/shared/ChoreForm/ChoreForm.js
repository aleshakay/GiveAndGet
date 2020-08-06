import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Col, Button, Form, FormGroup, Label, Row, Input,
} from 'reactstrap';
import choreData from '../../../helpers/data/choreData';
import { getCurrentDate } from '../../../helpers/utils';
import './ChoreForm.scss';

class ChoreForm extends React.Component {
  state = {
    name: '',
    enteredDate: '',
    picture: 'test',
    choreValue: '',
    choreCompleted: false,
    choreDescription: '',
    choreApproved: false,
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

  saveChoreForm = (e) => {
    e.preventDefault();
    const choreObj =  {
      name: this.state.name,
      enteredDate: getCurrentDate("-"),
      picture: this.state.picture,
      choreValue: Number(this.state.choreValue),
      choreCompleted: this.state.choreCompleted,
      choreDescription: this.state.choreDescription,
      choreApproved: this.state.choreApproved
    };

    choreData.addChore(choreObj)
    .then(() => this.props.history.push('/'))
    .catch((err) => console.error('error from save chores', err));
  }


  render() {
    return (
      <div className="ChoreForm">
        <Form className="ChoreForm">
        <Row form>
          <Col md={6}>
            <FormGroup className="ChoreFormGrp">
              <Label for='choreName'>Name of Chore</Label>
              <Input 
              type="text" 
              className='choreName' 
              id='name' 
              placeholder=""
              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="ChoreFormGrp">
              <Label for="choreDescription">Description of Chore</Label>
              <Input 
              type="text" 
              className="choreDescription"
              id="choreDescription"
              placeholder=""
              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="ChoreFormGrp">
              <Label for="choreValue">Chore Value</Label>
              <Input
              type="text" 
              className="choreValue" 
              id="choreValue" 
              placeholder="2"
              onChange={this.handleFieldChange}
              />
            </FormGroup> 
            <Button  className="ChoreFormGrp ChoreFormBtn" onClick={this.saveChoreForm}>Submit Chore</Button>
          </Col>  
        </Row> 
      </Form>
      
      </div>
    );
  }
}

export default withRouter (ChoreForm);
