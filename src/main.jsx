import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './route/Route'
import {
  RouterProvider
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={Router} />
   </div>
  </React.StrictMode>,
)
