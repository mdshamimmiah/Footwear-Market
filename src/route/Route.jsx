import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Lotto from "../pages/home/OurBrand/Lotto/Lotto";
import AddProduct from "../pages/home/OurBrand/AddProduct/AddProduct";
import SlipperItem from "../pages/home/OurBrand/Lotto/Slipper/SlipperItem";
import Apex from "../pages/home/OurBrand/Apex/Apex";
import Details from "../pages/home/OurBrand/Lotto/Details/Details";
import Shop from "../component/Shop/Shop";
import AddToCart from "../pages/MyCart/AddToCart";
import Update from "../component/Update/Update";
import Bata from "../pages/home/OurBrand/Bata/Bata";





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
        },
        {
          path:'/slipperItem',
          element:<SlipperItem></SlipperItem>,
         
        },
        {
          path:'/products/:brand/:category',
          element:<SlipperItem></SlipperItem>,
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader: ({ params }) => fetch(`https://footwear-market-server.vercel.app/details/${params.id}`)
        },
        {
          path:'/apex',
          element:
          <Apex></Apex>
        },
        {
          path:'/bata',
          element:<Bata></Bata>
        },
        {
         path:'/shop',
         element:<Shop></Shop>
        },
        {
         path:'/myCard',
         element:<AddToCart></AddToCart>
        },
        {
        path:'/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://footwear-market-server.vercel.app/details/${params.id}`)
      
        }
        
      ]
    },
  ]);
  export default Router;

  