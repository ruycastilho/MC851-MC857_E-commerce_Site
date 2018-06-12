import {
  CHANGE_USER,
  CHANGE_STATUS,
  CHANGE_LOGIN_ERROR,
} from '../actions'

import ReduxThunk from 'redux-thunk'

const initialState = {
  username: "",
  isLoggedIn: false,
  loginErrorMsg: false,
  code: 0,
}

const todos = (state = initialState, action) => {
  switch (action.type) {

    case 'CHANGE_USER':
      state = {
          ...state,
          username: action.payload
      };
      break;
    case 'CHANGE_STATUS':
      state = {
        ...state,
        isLoggedIn: action.payload
    };
    break;
    case 'CHANGE_LOGIN_ERROR':
    state = {
      ...state,
      loginErrorMsg: action.payload
    };
    break;
  }
  return state

}
export default todos