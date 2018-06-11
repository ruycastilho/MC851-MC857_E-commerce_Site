import {
  CHANGE_USER,
  CHANGE_STATUS,

} from '../actions'

const initialState = {
  username: "",
  isLoggedIn: false,
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
  }
  return state

}
export default todos