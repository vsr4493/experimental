import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

// Inner Pages
import OrderList from './pages/OrderList';
import OrderQA from './pages/OrderQA';

const Order = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/order-list/:itemID?`} component={OrderList} />
			<Route path={`${match.path}/qa/:itemID?`} component={OrderQA} />
		</Switch>
	);
}

export default Order;
