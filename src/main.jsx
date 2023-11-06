import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";import './index.css'
import Root from './Layout/Root';
import OurContext from './Context/OurContext';
import { HelmetProvider } from 'react-helmet-async';


const router = Root


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <OurContext>
      <HelmetProvider>
        <RouterProvider router={router} />
        </HelmetProvider>
      </OurContext>  
  </React.StrictMode>,
)
