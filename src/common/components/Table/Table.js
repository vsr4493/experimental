import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Typography from "@material-ui/core/Typography";
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
import EditIcon from "@material-ui/icons/Edit";
import Cloud from "@material-ui/icons/Cloud";
import Details from "@material-ui/icons/Details";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Link } from 'react-router-dom';

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
  },
  iconCell: {
    paddingRight: '0px'
  },
});

const TableCellIcon = styled(TableCell)`
  && {
    width: 50px;
    padding: 0px 20px;
  }
`;

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeSearchForm = this.onChangeSearchForm.bind(this);
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
          orderBy: this.props.defaultOrderBy || 'id',
          columns: this.props.columns,
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
        .getData({ order, orderBy, page: page + 1, rowsPerPage })
        .then(data => this.setState(() => ({ page: 0 })));
    });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState(state => ({ selected: this.props.data.map(n => n.id) }));
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
      .getData({ order, orderBy: orderBy.id, page: page + 1, rowsPerPage })
      .then(data => this.setState(() => ({ page })));
  };

  handleChangeRowsPerPage = event => {
    const { order, orderBy, page } = this.state;
    const rowsPerPage = event.target.value;
    this.props
      .getData({ order, orderBy: orderBy.id, page: page + 1, rowsPerPage })
      .then(data => this.setState(() => ({ rowsPerPage })));
  };

  onChangeSearchForm = (key, { nativeEvent }) => {
    this.setState(prev => ({
      search: Object.assign({}, this.state.search, {
        [key]: nativeEvent.target.value
      })
    }));
  };

  performSearch = () => {
    const { order, orderBy, page, rowsPerPage, search } = this.state;

    this.props
      .getData({ order, orderBy: orderBy.id, page: 1, rowsPerPage, search })
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
      data,
      meta
    } = this.props;
    if (!data || data.length === 0) {
      return <div></div>;
    }
    const { order, orderBy, selected, rowsPerPage, page, columns } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    return (
      <div className={classes.root}>
        <EnhancedToolbar
          numSelected={selected.length}
          tableTitle={tableTitle}
          classes={classes.toolbar}
        />
        {searchFields.length > 0 &&
          <SearchBar
            searchFields={searchFields}
            onChangeSearchForm={this.onChangeSearchForm}
            onSearch={this.performSearch}
          />
        }
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
                          { typeof col.renderCell !== 'undefined' && 
                            col.renderCell(item, col)
                          }
                          { typeof col.renderCell === 'undefined' && fieldFormatters[col.id]
                              ? fieldFormatters[col.id](item[col.id])
                              : get(item, col.id)
                          } 
                        </TableCell>
                      ))}
                      {typeof this.props.showEditor !== "undefined" && (
                        <TableCellIcon className={classes.iconCell}>
                          <IconButton
                            color="secondary"
                            onClick={() => this.props.showEditor({ activeItem: item })}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCellIcon>
                      )}
                      {typeof this.props.getDetailsRoute !== "undefined" &&
                        <TableCellIcon className={classes.iconCell}>
                          <Link style={{ textDecoration: 'none' }} to={this.props.getDetailsRoute(item)}>
                            <IconButton
                              color="primary"
                            >
                              <KeyboardArrowRight />
                            </IconButton>
                          </Link>
                        </TableCellIcon>
                      }
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          count={meta.total_count}
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
      </div>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

EnhancedTable = withStyles(styles)(EnhancedTable);

export default EnhancedTable;
