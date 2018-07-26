import ActionTypes from 'common/store/actionTypes';
import { createSelector } from 'reselect';
// Data will be stored as list of keys
const initialState = {
  data: {},
  keys: [],
  isFetchComplete: false,
};

const dataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_LIST: {
      return Object.assign({}, state, {
        data: action.payload.data || state.data,
        keys: action.payload.keys || state.keys,
        isFetchComplete: action.payload.isFetchComplete,
      });
    } 
    default:
      return state;
  }
};

const dataSelector = (state) => (state.data);
const keysSelector = (state) => (state.keys);

export const getDataList = createSelector(
  [dataSelector, keysSelector],
  (data, keys) => {
    return keys.map(id => data[id]);
  }
);


export default dataListReducer;