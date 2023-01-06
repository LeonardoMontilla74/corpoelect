import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import StoreProvider from './context/Users/StoreProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsStoreProvider from './context/Clients/ClientsStoreProvider';

axios.defaults.baseURL = 'http://localhost:4000';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ClientsStoreProvider>
          <App />
        </ClientsStoreProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
