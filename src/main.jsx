import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context'; 
import { CategoriesProvider } from './contexts/categories.context';
import { CartItemsProvider } from './contexts/cart_Items.context';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
          <CategoriesProvider>
            <CartItemsProvider>
              <App />
            </CartItemsProvider>
          </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);