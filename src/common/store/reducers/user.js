import ActionTypes from 'common/store/actionTypes';

const initialState = {
  isLoggedIn: false,
};

const userReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_DETAILS: {
      return Object.assign({}, state, {
        isLoggedIn: action.payload.isLoggedIn,
      });
    }
    default:
      return state;
  }
};

export default userReducer;
