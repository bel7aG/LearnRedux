import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppRouter } from './App';
import registerServiceWorker from './registerServiceWorker';
// import './playground/redux-101';
// import './playground/destructuring';

import './playground/redux-expensify';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
