import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, logout } from './Login.actions';
import LoginContainer from './Login.container';

export class LoginPage extends Component {
  render() {
    return  <LoginContainer {...this.props} />;
  }
}

const mapStateToProps = state => ({ auth: state.login });

const mapDispatchToProps = dispatch => bindActionCreators({ 
  onLoginClick: login,
  onLogoutClick: logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);