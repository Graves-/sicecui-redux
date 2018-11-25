import React, { Component } from 'react'

export default class LoginContainer extends Component {
  render() {
    const { auth } = this.props;
    console.log(this.props)
    return (
      <div>
        {auth.user ? 
          <button onClick={this.handleLogoutClick}>Logout</button>
          :
          <button onClick={this.handleLoginClick}>Login</button>
        }
      </div>
    )
  }

  handleLoginClick = () => {
    this.props.onLoginClick();
  }

  handleLogoutClick = () => {
    this.props.onLogoutClick();
  }
}
