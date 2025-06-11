import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/app/infra/redux/store';
import '@/app/i18n/i18n';

import Root from './Root';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
} 