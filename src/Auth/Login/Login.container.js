import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import loginStyles from './Login.styles';
import googleLogo from '../../assets/google_icon.png';

export class LoginContainer extends Component {
  render() {
    const { auth, classes } = this.props;
    if(auth.user) {
      return <Redirect to="/" />
    }
    return (
      <div className={classes.main}>
        <Paper className={classes.paper} elevation={3}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            </form> */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleLoginClick}
            >
              <img src={googleLogo} height={24} width={24} alt="Google Logo" />&nbsp;
              Sign in With Google
            </Button>
          
        </Paper>
      </div>
    )
  }

  handleLoginClick = () => {
    this.props.onLoginClick();
  }
}

LoginContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(loginStyles)(LoginContainer);