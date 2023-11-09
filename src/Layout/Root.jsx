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
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Manage from '../Pages/ManageSingle/Manage';


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
          element: <PrivateRoute><AddFood /></PrivateRoute> 
        },
        {
          path:'/managefoods',
          element: <PrivateRoute><ManageFoods /></PrivateRoute>
        },
        {
          path:'/foodreqlist',
          element: <PrivateRoute><FoodRequest /></PrivateRoute>
        },
        {
          path:'/update/:id',
          element: <UpdateFood />,
          loader: ({params}) => fetch(`https://resqfoodserver.vercel.app/foods/${params.id}`)
        },
        {
          path:'/details/:id',
          element: <PrivateRoute><FoodDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`https://resqfoodserver.vercel.app/foods/${params.id}`)
        },
        {
          path:'/manage/:id',
          element: <PrivateRoute><Manage /></PrivateRoute>,
          loader: ({params}) => fetch(`https://resqfoodserver.vercel.app/reqfoods/${params.id}`)
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
