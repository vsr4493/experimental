import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

// Inner Pages
import MaterialRequest from './pages/MaterialRequest';
import PurchaseOrder from './pages/PurchaseOrder';
import PurchaseReceipt from './pages/PurchaseReceipt';

const Order = ({ match }) => {
	return (
		<Switch>
			<Route path={`${match.path}/material-request/:itemID?`} component={MaterialRequest} />
			<Route path={`${match.path}/purchase-order/:itemID?`} component={PurchaseOrder} />
			<Route path={`${match.path}/purchase-receipt/:itemID?`} component={PurchaseReceipt} />
		</Switch>
	);
}

export default Order;
