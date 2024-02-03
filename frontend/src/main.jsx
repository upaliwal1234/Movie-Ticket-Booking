import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx';
import Movies from './Components/Movies/Movies.jsx'
import Cinemas from './Components/Cinemas/Cinemas.jsx'
import CinemaInfo from './Components/CinemaInfo/CinemaInfo.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={< Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/cinema' element={<Cinemas />} />
      <Route path='/cinema/cname' element={<CinemaInfo/>} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
