import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedToolbar from "./EnhancedToolbar";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { dateFormatter } from "common/utility/formatters";
import get from "lodash/get";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";
import Build from "@material-ui/icons/Build";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  },
  cell: {
    fontSize: "12px",
    padding: "0px"
  },
  firstCell: {
    fontSize: "12px",
    padding: "10px"
  }
});

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "",
      orderBy: "",
      selected: [],
      page: 0,
      rowsPerPage: 25,
      columns: [],
      search: {}
    };
  }

  componentDidMount() {
    this.props
      .getData({})
      .then(data =>
        this.setState(() => ({
          order: "asc",
          orderBy: this.props.getColumns(data)[0],
          columns: this.props.getColumns(data)
        }))
      );
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";
    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }
    const page = 0;
    const rowsPerPage = this.state.rowsPerPage;
    this.setState({ order, orderBy }, () => {
      this.props
        .getData({ order, orderBy, page, rowsPerPage })
        .then(data => this.setState(() => ({ page: 0 })));
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
        selected.slice(selectedIndex + 1)
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    const { order, orderBy, rowsPerPage } = this.state;
    this.props
      .getData({ order, orderBy: orderBy.id, page, rowsPerPage })
      .then(data => this.setState(() => ({ page })));
  };

  handleChangeRowsPerPage = event => {
    const { order, orderBy, page } = this.state;
    const rowsPerPage = event.target.value;
    this.props
      .getData({ order, orderBy: orderBy.id, page, rowsPerPage })
      .then(data => this.setState(() => ({ rowsPerPage })));
  };

  onChangeSearchForm = (key, event) => {
    this.setState(prev => ({
      search: Object.assign({}, this.state.search, {
        [key]: event.target.value
      })
    }));
  };

  performSearch = () => {
    const { order, orderBy, page, rowsPerPage, search } = this.state;

    this.props
      .getData({ order, orderBy: orderBy.id, page: 0, rowsPerPage, search })
      .then(data => {
        this.setState(() => ({ page: 0 }));
      });
  };
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {
      classes,
      fieldFormatters,
      tableTitle,
      searchFields,
      data
    } = this.props;
    if (!data || data.length === 0) {
      return <div>Loading..</div>;
    }
    const { order, orderBy, selected, rowsPerPage, page, columns } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <Paper className={classes.root}>
        <EnhancedToolbar
          numSelected={selected.length}
          tableTitle={tableTitle}
        />
        <SearchBar
          searchFields={searchFields}
          onChangeSearchForm={this.onChangeSearchForm}
          onSearch={this.performSearch}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              columnData={columns}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(item => {
                  const isSelected = this.isSelected(item.id);
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={item.id}
                      selected={isSelected}
                    >
                      <TableCell
                        padding="checkbox"
                        className={classes.firstCell}
                      >
                        <Checkbox
                          onClick={event => this.handleClick(event, item.id)}
                          checked={isSelected}
                        />
                      </TableCell>
                      {columns.map((col, index) => (
                        <TableCell className={classes.cell}>
                          {fieldFormatters[col.id]
                            ? fieldFormatters[col.id](item[col.id])
                            : get(item, col.id)}
                        </TableCell>
                      ))}
                      {typeof this.props.onEdit !== "undefined" && (
                        <TableCell>
                          <Button
                            variant="fab"
                            color="primary"
                            onClick={() => this.props.onEdit({ activeItem: item })}
                          >
                            <Build />
                          </Button>
                        </TableCell>
                      )}
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
            "aria-label": "Previous Page "
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
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
  classes: PropTypes.object.isRequired
};

EnhancedTable = withStyles(styles)(EnhancedTable);

export default EnhancedTable;