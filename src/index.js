import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

import store from './store';
console.log(store.getState())
ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

