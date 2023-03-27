import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);


if(process.env.NODE_ENV === 'production') disableReactDevTools()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


