import React from 'react';
import './App.css';
import { Dashboard } from './Dashboard/Dashboard';
import { Login } from './Login';
import {CartProvider} from './Context/CartContext'


function App() {
  return (
    <CartProvider>
      <html>
          <head>

          </head>
          <body>
              <Dashboard/>
          </body>
      </html>
    </CartProvider>
  );
}

export default App;
