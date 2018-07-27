import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// Pages
import Admin from 'pages/Admin';
import Order from 'pages/Order';
import Material from 'pages/Material';
import Login from 'pages/Login';
import NavBar from 'containers/NavBar';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

const isLoggedIn = () => {
	if(typeof(window) !== 'undefined') {
		return !!window.document.cookie.match(/authToken=(.+)/);
	} else {
		return false;
	}
}

const App = () => (
	<div>
		{isLoggedIn() &&
			<NavBar />
		}
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<Switch>
				{isLoggedIn() &&
				  <Route path="/administration" component={Admin} />
				}
				{isLoggedIn() &&
				  <Route path="/order-processing" component={Order} />
				}
				{isLoggedIn() &&
				  <Route path="/material-management" component={Material} />
				}
				{!isLoggedIn() &&
					<Route path="/login" component={Login} />
				}
				{isLoggedIn() &&
					<Redirect to="/administration/product" />
				}
				{!isLoggedIn() &&
					<Redirect to="/login" />
				}
			</Switch>
		</JssProvider>
	</div>
);

export default App;
