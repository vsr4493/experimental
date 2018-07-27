import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    const routeMap = {
      "Administration" : {
        "Location Master" : "administration/location-master",
        "Batch Master" : "administration/batch-master",
        "User Management" : "administration/user-management",
        "Role Master" : "administration/role-master",
        "Product" : "administration/product",
        "Product Location" : "administration/product-location",
        "Product Supplier" : "administration/product-supplier",
        "Product Supplier Schemes" : "administration/product-supplier-schemes",
        "Suppliers" : "administration/suppliers",
        "On Hold Status" : "administration/on-hold-status",
        "Error Status" : "administration/error-status"
      },
      "Order Processing": {
        "Order List" : "order-processing/order-list",
        "QA" : "order-processing/qa"
      },
      "Material Management": {
        "Material Request" : "material-management/material-request",
        "Purchase Order" : "material-management/purchase-order",
        "Purchase Receipt" : "material-management/purchase-receipt",
        "Receive PR" : "material-management/receive-pr",
        "Inwarding" : "material-management/inwarding"
      },
      "Accounting": {
        "Payments" : "accounting/payments",
        "Sales Invoice" : "accounting/sales-invoice",
        "Purchase Invoice" : "accounting/purchase-invoice"
      },
      "Reports": {
        "Reports 1" : "reports/reports-1",
        "Reports 2" : "reports/reports-2",
        "Reports 3" : "reports/reports-3",
        "Reports 4" : "reports/reports-4",
        "Reports 5" : "reports/reports-5"
      },
      "Profile": {
        "Logout" : () => {
          window.document.cookie = 'authToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          window.location = '/login';
        }
      }
    };

    const itemList = Object.keys(routeMap).map((k, i) => {
      return (
        <div key={i}>
          <NavBarItems data={routeMap[k]} title={k}/>
        </div>
    )});

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src="/images/thanos.jpg" style={{ maxHeight: 50 }} />
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
