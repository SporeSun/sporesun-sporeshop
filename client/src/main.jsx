import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

import App from './App';
import Home from './pages/Home';

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
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
