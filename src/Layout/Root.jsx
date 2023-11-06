import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Home from './../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Root = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Home />
        }
      ]
    },
  ]);

export default Root
