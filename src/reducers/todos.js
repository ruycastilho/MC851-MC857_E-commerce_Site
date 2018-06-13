
const initialState = {
  username: "",
  isLoggedIn: false,
  loginErrorMsg: false,
  code: 0,
  category: "",
  searchString: "",
  products: ""
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
    case 'CHANGE_CATEGORY':
    state = {
      ...state,
      category: action.payload
    };
    break;
    case 'CHANGE_SEARCH':
    state = {
      ...state,
      searchString: action.payload
    };
    break;
    case 'CHANGE_PRODUCTS':
    state = {
      ...state,
      products: action.products
    };
    break;
    default:
      break;
  };

  return state

}
export default todos