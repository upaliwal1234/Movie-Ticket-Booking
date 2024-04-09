import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="bg-red-500 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Login In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/cinemaprofile" className="text-white hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
