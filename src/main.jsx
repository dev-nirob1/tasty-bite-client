import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Layout/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Login from './Login/Login/Login.jsx';
import Register from './Login/Register/Register.jsx';
import ChefDetails from './Components/ChefSection/ChefDetails.jsx';
import ChefRecipe from './Components/ChefSection/SingleChefDetails/ChefRecipe.jsx';
import ErrorPage from './Common/ErrorPage/ErrorPage.jsx';
// import TermsAndConditionsPage from './Common/pages/TermsAndCondition/TermsAndConditionsPage.jsx';
// import LoginLayout from './Layout/LoginLayout.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/chef",
        element: <ChefDetails></ChefDetails>,        
      },
      {
        path: "/chefs/:id",
        element: <ChefRecipe></ChefRecipe>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
       
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
   
      // {
      //   path: "/terms",
      //   element: <TermsAndConditionsPage></TermsAndConditionsPage>
      // }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
