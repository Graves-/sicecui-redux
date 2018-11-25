import React, { Component } from 'react';
import DashboardContainer from './Dashboard.container';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class DashboardPage extends Component {
  render() {
    const { auth, location } = this.props;
    
    if(!auth.user) return <Redirect to={{pathname: '/login', state: { from: location }}} />;

    return <DashboardContainer {...this.props} />
  }
}

const mapStateToProps = state => ({
  auth: state.login
});

export default withRouter(connect(mapStateToProps, null)(DashboardPage));
