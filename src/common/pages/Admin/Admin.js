import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// Inner Pages
import AdminHome from './pages/AdminHome';
import AdminLocation from './pages/AdminLocation';

const Admin = ({ match }) => {
	console.log(match);
	return (
		<Switch>
			<Route path={`${match.path}/location-master`} component={AdminLocation} />
			<Route component={AdminHome} />
		</Switch>
	);
}

export default Admin;
