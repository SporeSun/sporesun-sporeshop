import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

import App from './App';
import Home from './pages/Home';
import Psilocybe from './pages/P.C.jsx';
import Exotic from './pages/E.P.jsx';
import Gourmet from './pages/G.M.jsx';

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
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
