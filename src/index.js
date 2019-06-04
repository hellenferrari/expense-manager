import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import { firebase  } from './firebase/firebase';
import { history } from './routers/AppRouter';
import { sortByDate } from './actions/filters';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<App/>, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
     if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
          renderApp();  
          if (history.location.pathname === '/') {
              history.push('/dashboard');
          }
        });
     } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
     }
 })
    
serviceWorker.unregister();
