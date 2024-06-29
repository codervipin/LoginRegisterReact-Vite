import './App.css'
import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>
  }
]);
const App = () => {
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
