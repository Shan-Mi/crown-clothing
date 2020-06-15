import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// set default value for state, if there is no state for the first time
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
