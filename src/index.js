import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './components/Signup'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Signup />, document.getElementById('root'));
registerServiceWorker();
