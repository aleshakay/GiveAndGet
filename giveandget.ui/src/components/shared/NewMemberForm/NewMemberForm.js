import React from 'react';
import {
  Row,
  Form,
  Button,
  Col,
  Input,
  FormGroup,
  Label,
} from 'reactstrap';
import { withRouter } from 'react-router';
import userData from '../../../helpers/data/userData';
import './NewMemberForm.scss';

class NewMemberForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    avatarId: 1,
    age: 0,
    roleId: 0,
    familyId: 1,
    pin: 1234,
    choreRewardPoint: 0,
    roles:[]
  }

  getRoles = () => {
    userData.getallRoles()
      .then((roles) => this.setState({ roles }))
      .catch((err) => console.error(err));
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

  
  componentDidMount() {
    this.getRoles();
  }

  saveMemberForm = (e) => {
    e.preventDefault();
    const userObj =  {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      avatarId: Number(this.state.avatarId),
      age: Number(this.state.age),
      roleId: Number(this.state.roleId),
      familyId: Number(this.state.familyId),
      choreRewardPoint: Number(this.state.choreRewardPoint)
    };
    userData.addUser(userObj)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from adding user', err));
  }


  render() {
    return (
      <div>
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for='newFamilyFirstName'>First Name</Label>
              <Input 
              type="text" 
              className='newFamilyFirstName' 
              id="firstName"
              placeholder=""
              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="newFamilyLastName">Last Name</Label>
              <Input 
              type="text" 
              className="newFamilyLastName"
              id="lastName"
              placeholder=""
              onChange={this.handleFieldChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="newFamilyAvatarId">Avatar</Label>
          <Input 
          type="text" 
          className="newFamilyAvatarId"
          id="avatarId"
          placeholder="https://animals.com"
          onChange={this.handleFieldChange} 
          />
        </FormGroup>
        <FormGroup>
          <Label for="newFamilyAge">Age</Label>
          <Input
           type="number" 
           className="newFamilyAge" 
           id="age" 
           placeholder="12"
           onChange={this.handleFieldChange}
           />
        </FormGroup>
        <FormGroup>
          <Label for="newFamilyPinId">Pin</Label>
          <Input
           type="number" 
           className="newFamilyPinId" 
           id="pinId" 
           placeholder="2"
           onChange={this.handleFieldChange}
           />
        </FormGroup>
        <FormGroup>
          <Label for="newFamilyRoleId">Type of User</Label>
          {/* <RoleIdDropDown roles={this.state.roles} selectedRole={this.selectedRole}/> */}
        <Input 
          id="roleId" 
          placeholder="family role"
          type="select"
          onChange={this.handleFieldChange}
        >
        <option value="">Choose a role</option>
        {this.state.roles.map((role) => (
          <option key={role.roleId} id={role.roleId} value={role.roleId}>{role.name}</option>
        ))}
        </Input>
        </FormGroup>
        <Button onClick={this.saveMemberForm}>Submit Chore</Button>
      </Form>
      </div>
    );
  }
}

export default withRouter (NewMemberForm);