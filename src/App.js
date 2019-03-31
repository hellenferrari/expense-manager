import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense }  from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

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