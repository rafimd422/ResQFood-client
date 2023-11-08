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
import Home from './../Pages/Home/Home';
import UpdateFood from './../Pages/UpdateFood/UpdateFood';
import FoodDetails from '../Pages/FoodDetails/FoodDetails';


const Root = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element: <Home />
        },
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
          path:'/update/:id',
          element: <UpdateFood />,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
          path:'/details/:id',
          element: <FoodDetails />,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
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
