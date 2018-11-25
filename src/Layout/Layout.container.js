import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import LayoutStyles from './Layout.styles';
import { Link } from 'react-router-dom';

export class Layout extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, location, children, auth } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
        <ListItem button>
          <ListItemIcon><AccountCircle /></ListItemIcon>
          <ListItemText primary={auth.user.displayName} secondary={auth.user.email} />
        </ListItem>
        <Link to={{ pathname: '/logout', state: { from: location} }}>
          <ListItem button>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>
      </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {sideList}
        </Drawer>
        <AppBar position="fixed" className={classNames(classes.appBar, { [classes.appBarShift]: this.state.open, })}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              App
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classNames(classes.content, { [classes.contentShift]: this.state.open, })}>
          <div className={classes.drawerHeader} />
          {children}
        </div> 
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(LayoutStyles)(Layout);