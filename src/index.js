import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'


const initialState = {
    username: "",
    isLoggedIn: false,
  }

const store = createStore(todos, initialState)


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
 
), document.getElementById('root'))

registerServiceWorker();
