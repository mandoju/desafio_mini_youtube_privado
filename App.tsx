import React from 'react';
import { AppRouter } from './src/router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from '@utils/redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
