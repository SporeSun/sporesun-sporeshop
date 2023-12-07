import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import App from './App';
import Home from './pages/Home';
import Psilocybe from './pages/P.C.jsx';
import Exotic from './pages/E.P.jsx';
import Gourmet from './pages/G.M.jsx';
import Seeds from './pages/Seeds.jsx';
import Plant from './pages/L.P.jsx';
import Lab from './pages/L.S.jsx';

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
        path: '/psilocybe-cubensis',
        element: <Psilocybe />,
      },
      {
        path: '/exotic-psilocybe',
        element: <Exotic />,
      },
      {
        path: '/gourmet-and-medicinal-cultures',
        element: <Gourmet />,
      },
      {
        path: '/live-plants',
        element: <Plant />,
      },
      {
        path: '/seeds',
        element: <Seeds />,
      },
      {
        path: '/lab-supplies',
        element: <Lab />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <CacheProvider value={emotionCache}>
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  </CacheProvider>
);
