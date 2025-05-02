import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Orders from './Orders.jsx'
import Profile from './Profile.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'


const router =  createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:'/login', Component:Login},
      {path:'/register', Component:Register},
      {path:'/orders', Component:Orders,
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {path:'/profile', Component: Profile}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
