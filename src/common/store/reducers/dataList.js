import ActionTypes from 'common/store/actionTypes';

const initialState = {
  data: [],
  isFetchComplete: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA_LIST: {
      return Object.assign({}, state, {
        data: action.payload.data,
        isFetchComplete: action.payload.isFetchComplete,
      });
    } 
    default:
      return state;
  }
};

export default userReducer;