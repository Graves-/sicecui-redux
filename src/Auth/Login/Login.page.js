import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { login } from './Login.actions';
import LoginContainer from './Login.container';

export class LoginPage extends Component {
  render() {
    return  <LoginContainer {...this.props} />;
  }
}

const mapStateToProps = state => ({ auth: state.login });

const mapDispatchToProps = dispatch => bindActionCreators({ 
  onLoginClick: login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));