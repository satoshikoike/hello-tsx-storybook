import React from 'react';
import { Provider } from 'react-redux';
import { AppLayout } from './AppLayout';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => (
  <Provider store={store}>
    <Router>
      <AppLayout />
    </Router>
  </Provider>
);
