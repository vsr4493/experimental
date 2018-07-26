import { combineReducers } from 'redux';
import user from './user';
import dataList from './dataList';

const rootReducer = combineReducers({
  user,
  dataList,
});

export default rootReducer;