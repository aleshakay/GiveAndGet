import React from 'react';
import userData from '../../../helpers/data/userData';
import ChildHomePage from '../ChildHomePage/ChildHomePage';
import './HomePage.scss';


class HomePage extends React.Component {
  state = {
    userId: 2,
    user: {},
  }

  getUserById = () => {
    const { userId } = this.state;
    userData.getUserById(userId)
      .then((user) => {
        this.setState({ user });
      })
      .catch((err) => console.error('error from get user', err));
  }

  componentDidMount() {
    this.getUserById();
  }

  renderHomePageByRole = () => {
    const { user } = this.state;
    return (
      <ChildHomePage user={ user }/>
    ) 
  }

  renderProfileByRole = () => {
    const { user } = this.state;
    switch (user.role) {
      case '2':
        return this.renderHomePageByRole();
      default:
        return this.renderHomePageByRole();
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div>
       <h1>HomePage</h1>
        {this.renderProfileByRole(user.role)}
      </div>
    );
  }
}

export default HomePage;