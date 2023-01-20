import React from 'react';
import 'dotenv/config';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import StoreProvider from './context/Users/StoreProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ClientsStoreProvider from './context/Clients/ClientsStoreProvider';
import NotifStoreProvider from './context/Notifications/NotifStoreProvider';

const URL = process.env.REACT_APP_URL;

axios.defaults.baseURL = URL || 'http://localhost:4000';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ClientsStoreProvider>
          <NotifStoreProvider>
            <App />
          </NotifStoreProvider>
        </ClientsStoreProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
