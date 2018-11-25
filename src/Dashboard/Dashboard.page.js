import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export class DashboardPage extends Component {
  render() {
    const { auth, location } = this.props;
    
    if(!auth.user) return <Redirect to={{pathname: '/login', state: { from: location }}} />;

    return (
      <div> 
        Home!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.login
});

export default connect(mapStateToProps, null)(withRouter(DashboardPage));
