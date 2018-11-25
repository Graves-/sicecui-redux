import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListContainer from './List.container';

class ListPage extends Component {
  render () {
    return <ListContainer {...this.props} />
  }
}

export default connect(null, null)(ListPage);