import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AvailableFoods from '../Pages/AvaiableFoods/AvailableFoods';
import AddFood from '../Pages/AddFood/AddFood';
import ManageFoods from '../Pages/ManageFoods/ManageFoods';
import FoodRequest from '../Pages/FoodRequest/FoodRequest';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Root = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/availablefoods',
          element: <AvailableFoods />
        },
        {
          path:'/addfoods',
          element: <AddFood />
        },
        {
          path:'/managefoods',
          element: <ManageFoods />
        },
        {
          path:'/foodreqlist',
          element: <FoodRequest />
        },
        {
          path:'/login',
          element: <Login />
        },
        {
          path:'/register',
          element: <Register />
        },
      ]
    },
  ]);

export default Root
