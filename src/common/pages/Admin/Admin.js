import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

// Inner Pages
import AdminLocation from './pages/AdminLocation';
import AdminSupplier from './pages/AdminSupplier';
import AdminProductSupplier from './pages/AdminProductSupplier';

const Admin = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/location-master/:itemID?`} component={AdminLocation} />
			<Route path={`${match.path}/product-supplier/:itemID?`} component={AdminProductSupplier} />
			<Route path={`${match.path}/suppliers/:itemID?`} component={AdminSupplier} />

		</Switch>
	);
}

export default Admin;
