import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'


const router =  createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'/login', Component:Login},
      {path:'/register', Component:Register}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
