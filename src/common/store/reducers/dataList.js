import ActionTypes from 'common/store/actionTypes';
import { createSelector } from 'reselect';
// Data will be stored as list of keys
const initialState = {
  data: {},
  isFetchComplete: false,
};

const dataListReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_LIST: {
      return Object.assign({}, state, {
        data: action.payload.data || state.data,
        isFetchComplete: action.payload.isFetchComplete,
      });
    } 
    default:
      return state;
  }
};

const dataSelector = (state) => (state.data);

export const getDataList = createSelector(
  [dataSelector],
  (data) => {
    return Object.keys(data).map(id => data[id]);
  }
);


export default dataListReducer;