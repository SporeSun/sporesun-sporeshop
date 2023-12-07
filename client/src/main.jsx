import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux";
import { HashRouter as Router } from 'react-router-dom'; // Change this line
import store from "./redux/store";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';


import App from './App';
import Home from './pages/Home';
import CartScreen from './pages/CartScreen';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductsPage from './pages/ProductsPage';
import CategoryScreen from './pages/CategoryScreen';
import "./assets/styles/bootstrap.custom.css";

const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404</div>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/cart',
        element: <CartScreen/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
     
      {
        path: "/category/:category",
        element: <CategoryScreen/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <CacheProvider value={emotionCache}>
  <ChakraProvider>
    {/* <Provider store={store}>
    <RouterProvider router={router} />
    </Provider> */}
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router> 
        <App />
      </Router>
  </Provider>,
  </ChakraProvider>
  </CacheProvider>
);

