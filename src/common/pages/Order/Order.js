import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

// Inner Pages
import OrderList from './pages/OrderList';

const Order = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/order-list/:itemID?`} component={OrderList} />
		</Switch>
	);
}

export default Order;
