import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Signup from './components/Signup'
// import Payment from './components/Payment'
// import Account from './components/Account'
import Tickets from './components/Tickets'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tickets />, document.getElementById('root'));
registerServiceWorker();
