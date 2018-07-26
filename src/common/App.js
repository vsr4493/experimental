import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import Switch from 'react-router-dom/Switch';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// Pages
import Admin from 'pages/Admin';
import Login from 'pages/Login';
import Table from './component/Table';
import NavBar from './containers/NavBar';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

const App = () => (
	<div>
		<NavBar />
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<Switch>
				<Route exact path="/tb" component={Table} />
			  <Route path="/administration" component={Admin} />
				<Route path="/login" component={Login} />
				<Redirect to="/administration" />
			</Switch>
		</JssProvider>
	</div>
);

export default App;
