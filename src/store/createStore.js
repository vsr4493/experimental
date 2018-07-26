import { createStore, applyMiddleware } from 'redux';
import request from 'utility/request';
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
};