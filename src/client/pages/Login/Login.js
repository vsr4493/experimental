import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import Card from '@material-ui/core/Card';
import CheckCircle from "@material-ui/icons/Check";
import styled from 'styled-components';


const StyledButton = styled(Button)`
  font-size: 22px;
`;

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class Login extends React.Component {

  state = {
    justify: 'center',
    alignItems: 'center'
  };

  headHome() {
    window.href.location="/"
  }

  render() {
    const { classes } = this.props;
    const { justify, alignItems } = this.state;
    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              spacing={16}
              className={classes.demo}
              alignItems={alignItems}
              justify={justify}
            >
              <Card>
                <Grid item>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Email Address</InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item justify={justify} alignItems={alignItems}>
                  <Button variant="fab" color="primary">
                    <CheckCircle />
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
