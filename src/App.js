import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase';

const store = configureStore();

// if (process.env.NODE_ENV === 'test') {
//   require('dotenv').config({ path: '.env.test' });
// } else if (process.env.NODE_ENV === 'development') {
//   require('dotenv').config({ path: '.env.development' });
// }

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </div>
    )
  }
}

export default App;