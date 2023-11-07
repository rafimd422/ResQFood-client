import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";import './index.css'
import Root from './Layout/Root';
import OurContext from './Context/OurContext';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const router = Root


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <OurContext>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
        </HelmetProvider>
      </OurContext>  
  </React.StrictMode>,
)
