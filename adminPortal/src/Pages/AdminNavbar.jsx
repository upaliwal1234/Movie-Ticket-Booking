import React from "react";
import { Link } from "react-router-dom";
import { CinemaState } from "../Context/CinemaProvider";
function NavBar() {
  const { user } = CinemaState();
  return (
    <nav className="bg-red-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-4 justify-center">
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
              <button className="text-white hover:text-gray-300">
                Logout
              </button>
              <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm w-full h-[100vh]">
                <div className="bg-white w-[400px] h-[300px] mx-auto rounded"></div>
              </div>
            </li>
            : ''}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
