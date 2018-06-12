import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import rootReducer from './reducers'
import todos from './reducers/todos';
import ReduxThunk from 'redux-thunk';

const initialState = {
    username: "",
    isLoggedIn: false,
    loginErrorMsg: false,
    code: 0,
}


const store = createStore(todos, initialState, applyMiddleware(ReduxThunk))


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
 
), document.getElementById('root'))

registerServiceWorker();
