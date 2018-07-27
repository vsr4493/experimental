import MaterialRequest from './container';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


const MaterialContainer = (props) => {
    const { classes } = props;
    console.log(props);
    return (
        <div>
            <Link to="/material-management/material-request/bulk-material-req">
                <Button variant="contained" color="primary" className={classes.button}>
                    Create MR
            </Button>
            </Link>
            <MaterialRequest {...props} />
        </div>
    );
}

MaterialContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default MaterialContainer;

export default withStyles(styles)(MaterialContainer);