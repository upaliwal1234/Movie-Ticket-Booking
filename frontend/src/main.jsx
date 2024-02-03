import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx';
import Movies from './Components/Movies/Movies.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={< Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/cinema' element={<Movies />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
