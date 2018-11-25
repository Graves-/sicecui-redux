import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../Login/Login.actions';

export class Logout extends React.Component {
  componentDidMount(){
    this.props.logout();
  }

  render() {
    return <Redirect to={{ pathname: '/login', state: { from: '/logout'} }} />;
  }
}

// const mapStateToProps = state => ({
//   auth: state.login
// });

const mapDispatchToProps = dispatch => bindActionCreators({ 
  logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout);