/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profilepic from '../../profile.jpg'
import axios from 'axios';
import baseURL from '../../DB';
import Logo from '/Logo.svg';
import { tokenCheck } from '../../../helperToken';

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const [movieName, setMovieName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // console.log(open);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = tokenCheck();
    if (token) {
      setIsLoggedIn(true);
    }
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [])

  const handleLogout = () => {
    setOpen(prevOpen => !prevOpen);
    localStorage.removeItem('myToken');
    setIsLoggedIn(false);
  }
  const handleProfile = () => {
    navigate('/profile');
  }
  const handleChange = (e) => {
    setMovieName(e.target.value);
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearch();
    }, 2000);
    return () => clearTimeout(timer);
  }, [movieName]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${baseURL}/search/movie/autoComplete/${movieName}`);
      setSuggestions(Array.isArray(response.data) ? response.data : []);
      console.log(suggestions);
    }
    catch (e) {
      console.log(e);
    }
  }
  const handleClick = async (e) => {
    e.preventDefault();
    setSuggestions([]);
    fetchdata();
  }
  const fetchdata = async () => {
    try {
      let response = await axios.get(`${baseURL}/search/movie/${movieName}`);
      // console.log(response.data);
      if (response.status === 200) {
        let data = response.data;
        setMovieName('');
        navigate(`/movies/${response.data.name}/${response.data._id}`);

      }
    }
    catch (err) {
      console.error('Error in fetching data', err);
    }
  }
  const handleSuggestionClick = (movieName) => {
    setMovieName(movieName);
    setSuggestions([]);
  }
  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-30">
      <div className=" flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            {/* <svg
              width="30"
              height="30"
              viewBox="0 0 50 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                fill="black"
              ></path>
            </svg> */}
            <img src={Logo} className='h-[3.5rem] m-2' ></img>
          </span>
          {/* <span className="font-bold">DevUI</span> */}
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => `inline-flex items-center text-sm font-semibold ${isActive ? 'text-black' : 'text-gray-600'}  hover:text-gray-900`}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) => `inline-flex items-center text-sm font-semibold ${isActive ? 'text-black' : 'text-gray-600'} hover:text-gray-900`}
            >
              Movies
            </NavLink>
            <NavLink
              to="/cinema"
              className={({ isActive }) => `inline-flex items-center text-sm font-semibold ${isActive ? 'text-black' : 'text-gray-600'}  hover:text-gray-900`}
            >
              Cinema
            </NavLink>
          </ul>
        </div>
        <div className='flex flex-row'>
          <div >
            <form onSubmit={handleClick} className='rounded-md bg-gray-100 px-1 py-1 flex gap-2 relative'>
              <input
                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={movieName}
                onChange={handleChange}
                placeholder="Search For Movies, Shows.."
              />
              <button className='m-1' type='submit' onClick={handleClick}>
                <svg className='w-5 fill-gray-500 mr-1 hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              </button>
            </form>
            <ul className="absolute z-10 bg-white border border-gray-200 rounded-md shadow-md w-[250px] mt-2">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion.name)} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">
                  <svg className="absolute w-4 h-4 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 mt-1 ml-3 lg:block">
            {isLoggedIn ? (
              <div className='flex'>
                <div className='relative' ref={menuRef}>
                  <button onClick={() => setOpen(prevOpen => !prevOpen)} >
                    <img className='rounded-full w-[2.5rem] h-[2.5rem] ' src={profilepic} alt="Profile" />
                  </button>
                  {open &&
                    <div className='shadow-md z-30 rounded-md bg-white absolute top-[3rem] -right-[1rem] p-2 w-[10rem]'>
                      <ul>
                        <Link to='/profile'>
                          <li onClick={() => setOpen(prevOpen => !prevOpen)} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer'>Profile</li>
                        </Link>
                        <li onClick={() => setOpen(prevOpen => !prevOpen)} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer'>Setting</li>
                        <li onClick={() => setOpen(prevOpen => !prevOpen)} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer'>Booking History</li>
                        <li onClick={handleLogout} className='p-2 hover:bg-gray-300 hover:rounded-md cursor-pointer border-t-2'>Logout</li>
                      </ul>
                    </div>
                  }
                </div>
              </div>

            ) : (
              <>
                <NavLink to="/signup">
                  <button className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Sign Up
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="rounded-md border border-black bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    Login
                  </button>
                </NavLink>
              </>
            )}
          </div>
          <div className="ml-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>

      </div>
    </div >
  )
}
export default Header