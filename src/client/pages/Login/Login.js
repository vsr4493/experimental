import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import CheckCircle from "@material-ui/icons/Check";

const styles = theme => ({
  card: {
    display: 'inline-flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    height: 230,
  }
});

class Login extends React.Component {

  state = {
    justify: 'center',
    alignItems: 'center'
  };

  render(){
    const { classes, theme } = this.props;
    const { justify, alignItems } = this.state;

    return (
      <div>
        <Grid container direction="row">
        </Grid>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image="/images/odin-login.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Grid
                container
                direction="column"
                spacing={16}
                className={classes.demo}
                alignItems={alignItems}
                justify={justify}
              >
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
                <Grid item justify={justify}>
                  <Button variant="fab" color="primary">
                    <CheckCircle />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);
