import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard.page';
import Login from './Auth/Login/Login.page';
import Logout from './Auth/Logout';
import NotFound from './404';
import { connect } from 'react-redux';
import { fetchUser } from './Auth/Login/Login.actions';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
;    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Logout} />
            <PrivateRoute path="/" component={Dashboard} user={this.props.auth.user} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.login
});

export default connect(mapStateToProps, { fetchUser })(App);
