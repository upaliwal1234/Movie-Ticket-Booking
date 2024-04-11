import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddShow from './Pages/AddShow.jsx'
import Shows from './Pages/Shows.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import MoviePage from './Pages/MoviePage.jsx'
import AddNewMovie from './Pages/AddNewMovie.jsx'
import CinemaProfilePage from './Pages/CinemaProfilePage.jsx'
import Navbar from './Pages/AdminNavbar.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import CinemaProvider from './Context/CinemaProvider.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/moviepage" element={<MoviePage />} />
        <Route path="/addmovie" element={<AddNewMovie />} />
        <Route path="/cinemaprofile" element={<CinemaProfilePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addshow" element={<AddShow />} />
        <Route path="/shows" element={<Shows />} />
      </Route>
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap your application with Router */}
    <CinemaProvider>
      <AppRoutes /> {/* Render your routes */}
    </CinemaProvider>
  </Router>
)
