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
import Profile from './Components/Profile/Profile.jsx'
import MovieCinema from './Components/Cinemas/MovieCinema.jsx'
import MovieShows from './Components/MovieShows/MovieShows.jsx'
import BookingChart from './Components/BookingChart/BookingChart.jsx'
import BookingPreview from './Components/Payment/BookingPreview.jsx'
import Success from './Components/Payment/Success.jsx'
import Failed from './Components/Payment/Failed.jsx'
import Bookings from './Components/Bookings/Bookings.jsx'
import Error from './Components/Error/Error.jsx'
import Ticket from './Components/Bookings/Ticket.jsx'
import EditProfile from './Components/Profile/EditProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={< Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cinema' element={<Cinemas />} />
      <Route path='/cinema/:id' element={<CinemaInfo />} />
      <Route path='/movies/:movieName/:id' element={<MovieCoverPage />} />
      <Route path='/buytickets/:movieName/:date' element={<MovieShows />} />
      <Route path='/buytickets/:movieName/:date/show/:id' element={<BookingChart />} />
      <Route path='/buytickets/:movieName/:date/show/:id/bookingpreview' element={<BookingPreview />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/editprofile/:id' element={<EditProfile />} />
      <Route path='/success' element={<Success />} />
      <Route path='/failed' element={<Failed />} />
      <Route path='/bookings' element={<Bookings />} />
      <Route path='/ticket' element={<Ticket />} />
      <Route path='*' element={<Error />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
