import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

// Inner Pages
import AdministrationHome from './pages/AdministrationHome';

const Administration = () => (
	<Switch>
	  <Route exact path="/" component={AdministrationHome} />
	</Switch>
);

export default App;
