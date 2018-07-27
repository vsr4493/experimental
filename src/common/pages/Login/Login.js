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
import Check from "@material-ui/icons/Check";

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
    height: 275,
  }
});

class Login extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      justify: 'center',
      alignItems: 'center',
      emailValue: '',
      passwordValue: ''
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.sendDetails = this.sendDetails.bind(this);
  }

  handleEmailInput = (e) => {
    this.setState({
      emailValue: e.target.value
    });
  }

  handlePasswordInput = (e) => {
    this.setState({
      passwordValue: e.target.value
    });
  }

  sendDetails(){
    // pass these two to a function for auth
    this.props.login(this.state.emailValue, this.state.passwordValue);
  }

  render(){
    const { classes, theme } = this.props;
    const { justify, alignItems } = this.state;

    return (
      <div>
        <Grid container justify={justify} alignItems={alignItems} direction="row">
          <Grid item xs={12}>
          <Typography variant="display4" gutterBottom>
            THANOS
          </Typography>
          </Grid>
        </Grid>
        <Grid container justify={justify} alignItems={alignItems} direction="row">
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image="/images/thanos.jpg"
              title="Live from space album cover"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid
                  container
                  direction="column"
                  spacing={40}
                  className={classes.demo}
                  alignItems={alignItems}
                  justify={justify}
                >
                  <Grid item>
                    <FormControl fullWidth className={classes.margin}>
                      <InputLabel htmlFor="email-address">Email Address</InputLabel>
                      <Input value={this.state.emailValue} onChange={this.handleEmailInput}
                        id="email-address"
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
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input value={this.state.passwordValue} onChange={this.handlePasswordInput}
                        id="password"
                        type="password"
                        startAdornment={
                          <InputAdornment position="start">
                            <VpnKey />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item >
                    <Button variant="fab" color="primary" onClick={() => this.sendDetails()}>
                      <Check />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);
