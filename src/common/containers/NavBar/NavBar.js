import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AdminHome from '../../pages/Admin/pages/AdminHome/AdminHome';
import NavBarItems from './NavBarItems';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {

  render(){
    const { classes } = this.props;
    const dummyData = {
      "Administration" : {
        "Location Master" : "location-master",
        "Batch Master" : "batch-master",
        "User Management" : "user-management",
        "Role Master" : "role-master",
        "Product" : "product",
        "Product Location" : "product-location",
        "Product Supplier" : "product-supplier",
        "Product Supplier Schemes" : "product-supplier-schemes",
        "Suppliers" : "suppliers",
        "On Hold Status" : "on-hold-status",
        "Error Status" : "error-status"
      },
      "Order Processing": {
        "Order List" : "order-list",
        "QA" : "qa"
      },
      "Material Management": {
        "Material Request" : "material-request",
        "Purchase Order" : "purchase-order",
        "Purchase Receipt" : "purchase-receipt",
        "Receive PR" : "receive-pr",
        "Inwarding" : "inwarding"
      },
      "Accounting": {
        "Payments" : "payments",
        "Sales Invoice" : "sales-invoice",
        "Purchase Invoice" : "purchase-invoice"
      },
      "Reports": {
        "Reports 1" : "reports-1",
        "Reports 2" : "reports-2",
        "Reports 3" : "reports-3",
        "Reports 4" : "reports-4",
        "Reports 5" : "reports-5"
      }
    };

    const itemList = Object.keys(dummyData).map((k, i) => {
      return (
        <div key={i}>
          <NavBarItems data={dummyData[k]} title={k}/>
        </div>
    )});

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {itemList}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
