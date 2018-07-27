import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as request from 'common/utility/request';
import rootReducer from './reducers';

const composeEnhancers =  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default (preloadedState = {}) => {
	const store = createStore(
	  rootReducer,
	  preloadedState,
	  composeEnhancers(
	  	applyMiddleware(thunkMiddleware.withExtraArgument({ request })),
	  ),
	);

	if (module.hot) {
   // Enable Webpack hot module replacement for reducers
   	module.hot.accept('./reducers', () => {
     	const nextRootReducer = require('./reducers').default;
    	store.replaceReducer(nextRootReducer);
   	});
 	}

 	return store;
};
