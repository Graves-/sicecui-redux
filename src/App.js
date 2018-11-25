import React, { Component } from 'react';
import Login from './Auth/Login/Login.page';
import { connect } from 'react-redux';
import { fetchUser } from './Auth/Login/Login.actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
