import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  searchbar: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0px 25px'
  },
  label: {
    lineHeight: '30px'
  },
  input: {
    width: '140px',
    margin: '0px 20px',
  },
  inputContainer: {
    display: 'flex',
    margin: '0px 10px'
  }
});
class SearchBar extends React.Component {
  render () {
    const { classes, searchFields, onChangeSearchForm, onSearch } = this.props;
    return (
      <div className={classes.searchbar}>

      {
        searchFields.map(field => (
          <div className={classes.inputContainer} key={field.key}>
            <div className={classes.label}> {field.label} </div>
            <Input
              className={classes.input}
              onChange={(e) => onChangeSearchForm(field.key, e)}
              inputProps={{
                'aria-label': field.label,
              }}
            />
          </div>
        ))
      }
        <div className={classes.inputContainer}>
          <Button variant="contained" color="primary" onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>
    );
  }

}

SearchBar = withStyles(styles)(SearchBar);

export default SearchBar;