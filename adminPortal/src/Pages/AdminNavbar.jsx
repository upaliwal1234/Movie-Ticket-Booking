import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CinemaState } from "../Context/CinemaProvider";
function NavBar() {
  const { user } = CinemaState();
  const navigate = useNavigate();
  const [logoutMenu, setLogoutMenu] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('cinemaAdmin');
    setLogoutMenu(false);
    navigate('/Login')
  }

  return (
    <nav className="bg-red-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-16 justify-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          {!user ? <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login In
            </Link>
          </li> : ''}
          {!user ?
            <li>
              <Link to="/signup" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </li>
            :
            <li>
              <Link to="/cinemaprofile" className="text-white hover:text-gray-300">
                Profile
              </Link>
            </li>}
          {user ?
            <li>
              <button onClick={() => setLogoutMenu(true)} className="text-white hover:text-gray-300">
                Logout
              </button>
              <div className={`absolute mt-5 w-[280px] h-[80px] border border-red-500 rounded ${logoutMenu ? '' : 'hidden'}`}>
                <div className="bg-gray-100 p-1 px-3 w-full h-full  rounded">
                  <h1 className="text-2xl text-gray-700">Are you sure to logout?</h1>
                  <div className="mt-1 flex justify-between">
                    <div className="w-[50px] h-[30px] bg-red-500 rounded">
                      <button onClick={handleLogout} className="w-full h-full text-gray-100">Yes</button>
                    </div>
                    <div className="w-[50px] h-[30px] bg-red-500 rounded">
                      <button onClick={() => setLogoutMenu(false)} className="w-full h-full text-gray-100">No</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            : ''}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
