import React from 'react';
import LayoutContainer from './Layout.container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class LayoutPage extends React.Component {
  render() {
    return <LayoutContainer {...this.props} />;
  }
}

const mapStateToProps = state => ({
  auth: state.login
});

export default withRouter(connect(mapStateToProps, null)(LayoutPage));
