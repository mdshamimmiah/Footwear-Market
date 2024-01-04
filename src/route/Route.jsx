import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Lotto from "../pages/home/OurBrand/Lotto/Lotto";
import AddProduct from "../pages/home/OurBrand/AddProduct/AddProduct";





  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
         path:'/',
         element:<Home></Home> 
        },
        {
          path:'/addProduct',
          element:<AddProduct></AddProduct>

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path: '/lotto',
          element: <Lotto></Lotto>
        }
      ]
    },
  ]);
  export default Router;