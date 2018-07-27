import App from 'common/App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'common/store/createStore';

const store = createStore();
render(
	<Provider store={store}>
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./common/App', () => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
}