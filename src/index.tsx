import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuth, fetchOffers } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
