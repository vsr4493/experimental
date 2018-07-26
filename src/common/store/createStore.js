import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as request from 'common/utility/request';
import rootReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
	const store = createStore(
	  rootReducer,
	  {},
	  composeEnhancers(
	  	applyMiddleware(thunkMiddleware.withExtraArgument({ request })),
	  ),
	);

	if (module.hot) {
   // Enable Webpack hot module replacement for reducers
   	module.hot.accept('./reducer', () => {
     	const nextRootReducer = require('./reducer').default;
    	store.replaceReducer(nextRootReducer);
   	});
 	}

 	return store;
};