import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx';
import Movies from './Components/Movies/Movies.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import Cinemas from './Components/Cinemas/Cinemas.jsx'
import CinemaInfo from './Components/CinemaInfo/CinemaInfo.jsx'
import MovieCoverPage from './Components/MovieCover/MovieCoverPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={< Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cinema' element={<Cinemas />} />
      <Route path='/cinema/cname' element={<CinemaInfo />} />
      <Route path='/movies/:movieName/movieCoverPage' element={<MovieCoverPage />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
