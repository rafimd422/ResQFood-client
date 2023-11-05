import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Home from './../Pages/Home/Home';

const Root = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element: <Home />
        }
      ]
    },
  ]);

export default Root
