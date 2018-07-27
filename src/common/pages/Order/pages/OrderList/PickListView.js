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
  text-transform: capitalize;
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

const combineItemDetails = (a, b) => {
  return Object.assign({}, a, b);
}

const parseItem = (item, batch_and_location) => ({
  uom: item.sku && item.sku.uom,
  quantity: batch_and_location.quantity,
  sku_name: item.sku && item.sku.sku_name,
  location: batch_and_location.location,
  expiry_date: batch_and_location.expiry_date,
  name: batch_and_location.name, 
});

const parseData = (data) => {
  return data.reduce((acc, item) => {
    const keys = item.batch_and_location.length > 0
      ? item.batch_and_location.map(i => parseItem(item, i))
      : parseItem(item, item.batch_and_location);
    return acc.concat(keys);
  }, []);
}

const columns = [
  {
    id: 'name',
    title: 'Batch name',
  },
  {
    id: 'uom',
    title: 'Unit Of Measurement',
  },
  {
    id: 'quantity',
    title: 'Quantity',
  },
  {
    id: 'sku_name',
    title: 'Sku Name',
  },
  {
    id: 'location',
    title: 'Location',
  },
  {
    id: 'expiry_date',
    title: 'Expiry Date',
  },
];

const Heading = styled(Typography)`
  && {
    font-size: 16px;
    padding: 20px;
  }
`;

const PicklistView = (props) => {
  const { classes } = props;
  const tableTitle = props.data[0].sales_order_id;
  const data = parseData(props.data);
  return (
    <Paper className={classes.root}>
      <Heading variant="title" id="Title">
        Order ID: {tableTitle}
      </Heading>
      <Table className={classes.table} aria-labelledby="tableTitle">
        <TableHead>
          <TableRow>
          	{columns.map((col) => (
          		<TableCellHeader>{formatLabel(col.title)}</TableCellHeader>
          	))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow>
              {columns.map(col => <TableCell>{formatValue(get(item, col.id))}</TableCell>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(PicklistView);
