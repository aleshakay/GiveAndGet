import React from 'react';
import userData from '../../../helpers/data/userData';
import ChildHomePage from '../ChildHomePage/ChildHomePage';
import FamilyHomePage from '../FamilyHomePage/FamilyHomePage';
import './HomePage.scss';


class HomePage extends React.Component {
  state = {
    userId: 1,
    user: {},
  }

  getUserById = () => {
    const { userId } = this.state;
    userData.getUserById(userId)
      .then((user) => {
        this.setState({ user });
        sessionStorage.setItem('userId', userId);
      })
      .catch((err) => console.error('error from get user', err));
  }

  componentDidMount() {
    this.getUserById();
  }

  renderChildHomePageByRole = () => {
    const { user } = this.state;
    return (
      <ChildHomePage user={ user }/>
    ) 
  }

  renderFamilyHomePageByRole = () => {
    const { user } = this.state;
    return (
      <FamilyHomePage user={ user }/>
    ) 
  }

  renderProfileByRole = () => {
    const { user } = this.state;
    switch (user.roleId) {
      case 1:
        return this.renderFamilyHomePageByRole();
      case 2:
        return this.renderChildHomePageByRole();
      default: 
        return this.renderChildHomePageByRole();

    }
  }

  render() {
    const { user } = this.state;
    return (
      <div>
       <h1>HomePage</h1>
        {this.renderProfileByRole(user)}
      </div>
    );
  }
}

export default HomePage;