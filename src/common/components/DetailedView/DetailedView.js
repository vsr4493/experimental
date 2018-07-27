import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import get from 'lodash/get';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const TableCellHeader = styled(TableCell)`
  && {
    text-transform: capitalize;
    font-weight: 700;
    color: #333;
    font-size: 14px;
  }
`;

const formatLabel = (label) => {
  return label.toLowerCase().replace(/_/g, ' ');
}

const ignoreKeys = ['created_at', 'updated_at'];

const formatValue = (value) => {
  if(value == null) {
    return '';
  }
  if(Array.isArray(value)) {
    return value.join(', ');
  }
  if(typeof value === 'object') {
    return Object.keys()
  }
  return value;
}

const DetailedView = (props) => {
  const { classes } = props;
  const config = props.config;
  const filteredKeys = Object.keys(config).filter(key => ignoreKeys.indexOf(key) === -1);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          	{filteredKeys.map((key) => (
          		<TableCellHeader>{formatLabel(config[key])}</TableCellHeader>
          	))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {filteredKeys.map(key => <TableCell>{formatValue(get(props.data, key))}</TableCell>)}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

DetailedView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedView);