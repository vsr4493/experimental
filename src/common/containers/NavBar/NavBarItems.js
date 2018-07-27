import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    zIndex: '1000'
  },

});

class NavBarItems extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, data, title } = this.props;
    const { open } = this.state;

    const menuItems = Object.keys(data).map((k, i) => {
      const isFunction = typeof(data[k]) === 'function';
      return (
        <div key={i}>
          {isFunction &&
            <MenuItem onClick={data[k]}>{k}</MenuItem>
          }
          {!isFunction &&
            <Link style={{ textDecoration: 'none' }} to={`/${data[k]}`}>
              <MenuItem onClick={this.handleToggle}>{k}</MenuItem>
            </Link>
          }
        </div>
      )
    });

    return (
      <div className={classes.root}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          color="inherit"
          aria-owns={open ? 'menu-list-grow' : null}
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          {title}
        </Button>
        <Popper open={open} anchorEl={this.anchorEl} className={classes.paper} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    {menuItems}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

NavBarItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBarItems);
