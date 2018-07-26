import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedToolbar from './EnhancedToolbar';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { dateFormatter } from 'common/utility/formatters';

import SearchBar from './SearchBar';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}
const dumbodata = {
  "data": [
      {
          "id": 1,
          "vendor_id": 60,
          "sku_id": 1,
          "batch_id": 1,
          "location_id": 60,
          "quantity": 13,
          "cost_price": "5.78",
          "selling_price": "45.08",
          "created_at": "2018-07-26T16:22:20.694+05:30",
          "updated_at": "2018-07-26T16:22:20.694+05:30"
      },
      {
          "id": 2,
          "vendor_id": 32,
          "sku_id": 2,
          "batch_id": 2,
          "location_id": 32,
          "quantity": 57,
          "cost_price": "32.15",
          "selling_price": "19.11",
          "created_at": "2018-07-26T16:22:20.727+05:30",
          "updated_at": "2018-07-26T16:22:20.727+05:30"
      },
      {
          "id": 3,
          "vendor_id": 42,
          "sku_id": 3,
          "batch_id": 3,
          "location_id": 42,
          "quantity": 37,
          "cost_price": "22.39",
          "selling_price": "74.37",
          "created_at": "2018-07-26T16:22:20.756+05:30",
          "updated_at": "2018-07-26T16:22:20.756+05:30"
      },
      {
          "id": 4,
          "vendor_id": 95,
          "sku_id": 4,
          "batch_id": 4,
          "location_id": 95,
          "quantity": 95,
          "cost_price": "37.58",
          "selling_price": "91.69",
          "created_at": "2018-07-26T16:22:20.784+05:30",
          "updated_at": "2018-07-26T16:22:20.784+05:30"
      },
      {
          "id": 5,
          "vendor_id": 65,
          "sku_id": 5,
          "batch_id": 5,
          "location_id": 65,
          "quantity": 41,
          "cost_price": "46.77",
          "selling_price": "63.68",
          "created_at": "2018-07-26T16:22:20.816+05:30",
          "updated_at": "2018-07-26T16:22:20.816+05:30"
      },
      {
          "id": 6,
          "vendor_id": 38,
          "sku_id": 6,
          "batch_id": 6,
          "location_id": 38,
          "quantity": 28,
          "cost_price": "47.86",
          "selling_price": "45.65",
          "created_at": "2018-07-26T16:22:20.844+05:30",
          "updated_at": "2018-07-26T16:22:20.844+05:30"
      },
      {
          "id": 7,
          "vendor_id": 43,
          "sku_id": 7,
          "batch_id": 7,
          "location_id": 43,
          "quantity": 89,
          "cost_price": "63.27",
          "selling_price": "10.54",
          "created_at": "2018-07-26T16:22:20.873+05:30",
          "updated_at": "2018-07-26T16:22:20.873+05:30"
      },
      {
          "id": 8,
          "vendor_id": 26,
          "sku_id": 8,
          "batch_id": 8,
          "location_id": 26,
          "quantity": 79,
          "cost_price": "67.76",
          "selling_price": "89.43",
          "created_at": "2018-07-26T16:22:20.901+05:30",
          "updated_at": "2018-07-26T16:22:20.901+05:30"
      },
      {
          "id": 9,
          "vendor_id": 27,
          "sku_id": 9,
          "batch_id": 9,
          "location_id": 27,
          "quantity": 96,
          "cost_price": "5.49",
          "selling_price": "62.37",
          "created_at": "2018-07-26T16:22:20.930+05:30",
          "updated_at": "2018-07-26T16:22:20.930+05:30"
      },
      {
          "id": 10,
          "vendor_id": 53,
          "sku_id": 10,
          "batch_id": 10,
          "location_id": 53,
          "quantity": 61,
          "cost_price": "70.41",
          "selling_price": "5.96",
          "created_at": "2018-07-26T16:22:20.996+05:30",
          "updated_at": "2018-07-26T16:22:20.996+05:30"
      },
      {
          "id": 11,
          "vendor_id": 53,
          "sku_id": 11,
          "batch_id": 11,
          "location_id": 53,
          "quantity": 75,
          "cost_price": "7.75",
          "selling_price": "85.19",
          "created_at": "2018-07-26T16:22:21.036+05:30",
          "updated_at": "2018-07-26T16:22:21.036+05:30"
      },
      {
          "id": 12,
          "vendor_id": 14,
          "sku_id": 12,
          "batch_id": 12,
          "location_id": 14,
          "quantity": 88,
          "cost_price": "81.31",
          "selling_price": "42.0",
          "created_at": "2018-07-26T16:22:21.074+05:30",
          "updated_at": "2018-07-26T16:22:21.074+05:30"
      },
      {
          "id": 13,
          "vendor_id": 45,
          "sku_id": 13,
          "batch_id": 13,
          "location_id": 45,
          "quantity": 88,
          "cost_price": "68.68",
          "selling_price": "73.73",
          "created_at": "2018-07-26T16:22:21.120+05:30",
          "updated_at": "2018-07-26T16:22:21.120+05:30"
      },
      {
          "id": 14,
          "vendor_id": 34,
          "sku_id": 14,
          "batch_id": 14,
          "location_id": 34,
          "quantity": 28,
          "cost_price": "38.01",
          "selling_price": "29.37",
          "created_at": "2018-07-26T16:22:21.162+05:30",
          "updated_at": "2018-07-26T16:22:21.162+05:30"
      },
      {
          "id": 15,
          "vendor_id": 43,
          "sku_id": 15,
          "batch_id": 15,
          "location_id": 43,
          "quantity": 47,
          "cost_price": "65.14",
          "selling_price": "23.62",
          "created_at": "2018-07-26T16:22:21.192+05:30",
          "updated_at": "2018-07-26T16:22:21.192+05:30"
      },
      {
          "id": 16,
          "vendor_id": 74,
          "sku_id": 16,
          "batch_id": 16,
          "location_id": 74,
          "quantity": 48,
          "cost_price": "51.87",
          "selling_price": "42.04",
          "created_at": "2018-07-26T16:22:21.220+05:30",
          "updated_at": "2018-07-26T16:22:21.220+05:30"
      },
      {
          "id": 17,
          "vendor_id": 29,
          "sku_id": 17,
          "batch_id": 17,
          "location_id": 29,
          "quantity": 89,
          "cost_price": "56.74",
          "selling_price": "33.87",
          "created_at": "2018-07-26T16:22:21.246+05:30",
          "updated_at": "2018-07-26T16:22:21.246+05:30"
      },
      {
          "id": 18,
          "vendor_id": 9,
          "sku_id": 18,
          "batch_id": 18,
          "location_id": 9,
          "quantity": 92,
          "cost_price": "75.08",
          "selling_price": "43.7",
          "created_at": "2018-07-26T16:22:21.272+05:30",
          "updated_at": "2018-07-26T16:22:21.272+05:30"
      },
      {
          "id": 19,
          "vendor_id": 52,
          "sku_id": 19,
          "batch_id": 19,
          "location_id": 52,
          "quantity": 66,
          "cost_price": "52.18",
          "selling_price": "9.6",
          "created_at": "2018-07-26T16:22:21.299+05:30",
          "updated_at": "2018-07-26T16:22:21.299+05:30"
      },
      {
          "id": 20,
          "vendor_id": 12,
          "sku_id": 20,
          "batch_id": 20,
          "location_id": 12,
          "quantity": 49,
          "cost_price": "80.91",
          "selling_price": "74.78",
          "created_at": "2018-07-26T16:22:21.325+05:30",
          "updated_at": "2018-07-26T16:22:21.325+05:30"
      },
      {
          "id": 21,
          "vendor_id": 90,
          "sku_id": 21,
          "batch_id": 21,
          "location_id": 90,
          "quantity": 74,
          "cost_price": "96.26",
          "selling_price": "98.59",
          "created_at": "2018-07-26T16:22:21.352+05:30",
          "updated_at": "2018-07-26T16:22:21.352+05:30"
      },
      {
          "id": 22,
          "vendor_id": 57,
          "sku_id": 22,
          "batch_id": 22,
          "location_id": 57,
          "quantity": 31,
          "cost_price": "9.44",
          "selling_price": "5.4",
          "created_at": "2018-07-26T16:22:21.382+05:30",
          "updated_at": "2018-07-26T16:22:21.382+05:30"
      },
      {
          "id": 23,
          "vendor_id": 77,
          "sku_id": 23,
          "batch_id": 23,
          "location_id": 77,
          "quantity": 86,
          "cost_price": "88.53",
          "selling_price": "97.79",
          "created_at": "2018-07-26T16:22:21.408+05:30",
          "updated_at": "2018-07-26T16:22:21.408+05:30"
      },
      {
          "id": 24,
          "vendor_id": 93,
          "sku_id": 24,
          "batch_id": 24,
          "location_id": 93,
          "quantity": 43,
          "cost_price": "30.73",
          "selling_price": "2.61",
          "created_at": "2018-07-26T16:22:21.433+05:30",
          "updated_at": "2018-07-26T16:22:21.433+05:30"
      },
      {
          "id": 25,
          "vendor_id": 9,
          "sku_id": 25,
          "batch_id": 25,
          "location_id": 9,
          "quantity": 53,
          "cost_price": "18.14",
          "selling_price": "33.93",
          "created_at": "2018-07-26T16:22:21.459+05:30",
          "updated_at": "2018-07-26T16:22:21.459+05:30"
      }
  ],
  "meta": {
      "total_pages": 4,
      "total_count": 100
  },
  "is_success": true,
  "status_code": 200
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];



const getData = (dataURL) => new Promise(function (resolve, reject) {
  // const data =  [
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Donut', 452, 25.0, 51, 4.9),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  //   createData('Honeycomb', 408, 3.2, 87, 6.5),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
  //   createData('KitKat', 518, 26.0, 65, 7.0),
  //   createData('Lollipop', 392, 0.2, 98, 0.0),
  //   createData('Marshmallow', 318, 0, 81, 2.0),
  //   createData('Nougat', 360, 19.0, 9, 37.0),
  //   createData('Oreo', 437, 18.0, 63, 4.0),
  // ];
  console.log(dataURL);
  resolve(dumbodata.data);
});

const formatLabel = (string_like_this) => {
  const parts = string_like_this.split('_').map(s => s.slice(0, 1).toUpperCase() + s.slice(1))
  return parts.join(' ');
}
const getColumns = (data) => {
  if (!Array.isArray(data)) {
    console.warn('[getFirstColumn]: getFirstColumn expect array')
    return
  }
  if (data.length === 0) {
    return ''
  }

  const columnNames = Object.keys(data[0])

  return columnNames.map(column => ({id: column, label: formatLabel(column)}));
};


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  cell: {
    fontSize: '12px',
    padding: '0px'
  },
  firstCell: {
    fontSize: '12px',
    padding: '10px'
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: '',
      orderBy: '',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 25,
      columns: [],
      search: {}
    };
  }
  componentDidMount () {
    this.props.getData(this.props.dataURL).then(
      (data) => this.setState(() => ({data: data, order: 'asc', orderBy: this.props.getColumns(data)[0], columns: this.props.getColumns(data)}))
    )
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    const page = 0;
    const rowsPerPage = this.state.rowsPerPage;
    this.setState({ order, orderBy }, () => {
      this.props.getData({order, orderBy, page, rowsPerPage}).then(data =>
        this.setState(() => ({data, page: 0}))
      );
    });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    const { order, orderBy, rowsPerPage } = this.state;
    this.props.getData({ order, orderBy: orderBy.id, page, rowsPerPage }).then(data => this.setState(() => ({data, page}))) ;
  };

  handleChangeRowsPerPage = event => {
    const { order, orderBy, page } = this.state;
    const rowsPerPage = event.target.value;
    this.props.getData({ order, orderBy: orderBy.id, page, rowsPerPage }).then(data => this.setState(() => ({data, rowsPerPage})));
  };

  onChangeSearchForm = (key, event) => {
    const newSearch = Object.assign({}, this.state.search, {[key]: event.target.value});
    this.setState((prev) => ({
      search: newSearch
    }));
  }

  performSearch = () => {
    const { order, orderBy, page, rowsPerPage, search } = this.state;

    this.props.getData({ order, orderBy: orderBy.id, page:0, rowsPerPage, search }).then(data => {
      this.setState(() => ({data, page: 0}))
    })
  }
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, hideFields, fieldFormatters, tableTitle, searchFields } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page, columns } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const filteredColumns = columns.filter(col => hideFields.indexOf(col.id) === -1)
    return (
      <Paper className={classes.root}>
        <EnhancedToolbar numSelected={selected.length} tableTitle={tableTitle} />
        <SearchBar
          searchFields={searchFields.map((s => ({label: formatLabel(s), key: s})))}
          onChangeSearchForm={this.onChangeSearchForm}
          onSearch={this.performSearch}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              columnData={filteredColumns}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              hideFields={hideFields}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox" className={classes.firstCell}>
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      {
                        filteredColumns
                          .map((col, index) =>(
                          <TableCell className={classes.cell}>
                            {
                              fieldFormatters[col.id] ?
                                fieldFormatters[col.id](n[col.id]) :
                                n[col.id]
                            }
                          </TableCell>
                          )
                        )
                      }
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page ',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          rowsPerPageOptions={[25, 50]}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

EnhancedTable = withStyles(styles)(EnhancedTable);


const ExportableTable = () => (
  <EnhancedTable
    getData={getData}
    getColumns={getColumns}
    dataURL={'not required'}
    hideFields={['id']}
    tableTitle={"Stuff Stuff"}
    fieldFormatters={{
      created_at: dateFormatter,
      updated_at: dateFormatter
    }}
    searchFields={['vendor_id', 'location_id']}
  />
)
export default ExportableTable;
