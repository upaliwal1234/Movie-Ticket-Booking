import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import MoviePage from './Pages/MoviePage.jsx'
import AddNewMovie from './Pages/AddNewMovie.jsx'
import CinemaProfilePage from './Pages/CinemaProfilePage.jsx'
import Navbar from './Pages/AdminNavbar.jsx'import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='dashboard' element={<DashBoard/>}/>
      <Route path='/moviepage' element={<MoviePage/>}/>
      <Route path='addmovie' element={<AddNewMovie/>}/>
      <Route path='/cinemaprofile' element={<CinemaProfilePage/>}/>
      <Route path='navbar' element={<Navbar/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
