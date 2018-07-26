import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import Home from './Home';
// Pages
import Admin from './client/pages/Admin';


const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

const App = () => (
	<JssProvider jss={jss} generateClassName={generateClassName}>
		<Switch>
		  <Route path="/administration" component={Admin} />
			<Route path="/" component={Home} />
		</Switch>
	</JssProvider>
);

export default App;
