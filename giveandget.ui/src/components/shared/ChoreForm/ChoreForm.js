import React from 'react';

import {
  Col, Button, Form, FormGroup, Label, Row, Input,
} from 'reactstrap';

import './ChoreForm.scss';
import choreData from '../../../helpers/data/choreData';

class ChoreForm extends React.Component {
  state = {
    name: '',
    enteredDate: '',
    picture: '',
    choreValue: '',
    choreCompleted: false,
    choreDescription: '',
    choreApproved: false,
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ 
      [e.target.name]: e.target.value, [e.target.enteredDate.name]: e.target.value, [e.target.picture]: e.target.value, [e.target.choreValue]: e.target.value, [e.target.choreCompleted]: e.target.value, [e.target.choreDescription]: e.target.value, [e.target.choreApproved]: e.target.value });
  }

  addChore = (e) => {
  e.preventDefault();
  const choreObj =  {
    name: this.state.name,
    enteredDate: this.state.enteredDate,
    picture: this.state.picture,
    choreValue: this.state.choreValue,
    choreCompleted: this.state.choreCompleted,
    choreDescription: this.state.choreDescription,
    choreApproved: this.state.choreApproved
  };

  choreData.addChore(choreObj)
  .then(() => this.props.history.push('/AvailableChores'))
  .catch((err) => console.error('error from save chores', err));
  
}


  render() {
    const { choreName, choreValue, choreDescription, picture, enteredDate } = this.state;

    return (
      <div>
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='choreName'>Name of Chore</Label>
              <Input 
              type="text" 
              className='choreName' 
              id='choreName' 
              placeholder=""
              value={choreName}
              onChange={this.state.name}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="choreDescription">Description of Chore</Label>
              <Input 
              type="text" 
              className="choreDescription"
              id="choreDescription"
              placeholder=""
              value={choreDescription}
              onChange={this.state.choreDescription}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="chorePicture">Picture for Chore</Label>
          <Input 
          type="text" 
          className="chorePicture"
          id="chorePicture"
          placeholder="https://animals.com"
          value={picture}
          onChange={this.state.picture} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="choreValue">Chore Value</Label>
          <Input
           type="text" 
           className="choreValue" 
           id="choreValue" 
           placeholder="2"
           value={choreValue}
           onChange={this.state.choreValue}
           />
        </FormGroup>
        <FormGroup>
        <Label for="exampleDatetime">Datetime</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
          value={enteredDate}
          onChange={this.state.enteredDate}
        />
      </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
              type="radio" 
              name="radio2" 
              />{' '}
              Active
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input 
              type="radio" 
              name="radio2" 
              />{' '}
              Inactive
            </Label>
          </FormGroup>
        <Button onClick={this.saveChoreForm}>Submit Chore</Button>
      </Form> 
      </div>
    );
  }
}

export default ChoreForm;
