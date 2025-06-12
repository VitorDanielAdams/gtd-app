import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/infrastructure/redux/store';
import '@/infrastructure/i18n/i18n';

import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
} 