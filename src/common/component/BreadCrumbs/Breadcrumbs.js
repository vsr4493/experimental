import React from 'react';
// import styles from './Breadcrumbs.css';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        marginTop: '10px',
        display: 'block',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '5px'

    }
};

const BreadcrumbsWrapper = (props) => {
    const { classes } = props;
    return (
        <div className={classes.container}>
            <span>{props.breadcrumbsLink}</span>
        </div>

    );
}

// const BreadcrumbsWrapperStyled = styled(BreadcrumbsWrapper)`

// `;

export default withStyles(styles)(BreadcrumbsWrapper);