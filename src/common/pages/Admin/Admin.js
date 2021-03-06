import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

// Inner Pages
import AdminLocation from './pages/AdminLocation';
import AdminSupplier from './pages/AdminSupplier';
import AdminProduct from './pages/AdminProduct';
import AdminSupplierScheme from './pages/AdminSupplierScheme';
import AdminBatch from './pages/AdminBatch';
import AdminProductSupplier from './pages/AdminProductSupplier';
import AdminProductLocation from './pages/AdminProductLocation';
const Admin = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/location-master/:itemID?`} component={AdminLocation} />
			<Route path={`${match.path}/product-supplier/:itemID?`} component={AdminProductSupplier} />
			<Route path={`${match.path}/suppliers/:itemID?`} component={AdminSupplier} />
			<Route path={`${match.path}/product/:itemID?`} component={AdminProduct} />
			<Route path={`${match.path}/product-supplier-schemes/:itemID?`} component={AdminSupplierScheme} />
			<Route path={`${match.path}/batch-master/:itemID?`} component={AdminBatch} />
			<Route path={`${match.path}/product-location/:itemID?`} component={AdminProductLocation} />
			<Redirect to={`${match.path}/product`}/>
		</Switch>
	);
}

export default Admin;
