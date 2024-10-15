import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './i18n';
import App from './App';
import './assets/css/index.css'
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store}>
    <App />
    </Provider>
);
   
 
