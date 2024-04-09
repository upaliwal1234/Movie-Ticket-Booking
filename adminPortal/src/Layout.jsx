/* eslint-disable no-unused-vars */
import React from 'react'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'
import { Outlet } from "react-router-dom";
import NavBar from './Pages/AdminNavbar';
function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Layout