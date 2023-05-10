import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

import reportWebVitals from './reportWebVitals';

import Header from './components/products/ProductsHeader/ProductsHeader';
import Products from './Pages/ProductsPage/ProductsPage';
import HeaderBasket from './components/basket/BasketHeader/BasketHeader';
import Basket from './Pages/BasketPage/BasketPage';
import Registration from './Pages/RegistrationPage/RegistrationPage';


import { store } from './store';
import { Provider } from 'react-redux';

// import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Registration />,
  }, 
  {
    path: "/module-react",
    element:
    <>
    <Header />,
    <Products />,
    </>
  },
  {
    path: "/module-react/basket",
    element:
      <>
      <HeaderBasket />,
      <Basket />,
      </>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
