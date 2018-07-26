import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import Table from './Components/Table'
import JssProvider from 'react-jss/lib/JssProvider';
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

const App = () => (
	<JssProvider jss={jss} generateClassName={generateClassName}>
		<Switch>
		  <Route exact path="/" component={Home} />
			<Route exact path="/table" component={Table} />
 		</Switch>
	</JssProvider>
);

export default App;
