import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// Inner Pages
import AdminHome from './pages/AdminHome';
import AdminLocation from './pages/AdminLocation';
import AdminSupplier from './pages/AdminSupplier';

const Admin = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/location-master`} component={AdminLocation} />
			<Route path={`${match.path}/suppliers`} component={AdminSupplier} />
			<Route component={AdminHome} />
		</Switch>
	);
}

export default Admin;
