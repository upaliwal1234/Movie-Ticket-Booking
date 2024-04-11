import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseURL from '../DB';
import { CinemaState } from '../Context/CinemaProvider';

export default function Shows() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = CinemaState();
  const [shows, setShows] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const fetchShows = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/admin/allShows/${user.id}`);
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchShows();
  }, [user]);

  return (
    <div className='mb-10 w-[80%] mx-auto'>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Shows</h1>
      <form className='flex w-full justify-center items-center'>
        <input
          className="border w-3/4 p-3 mt-7 mr-2"
          type="text"
          placeholder="Search Shows . . ."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-2 rounded-md mt-7">Search</button>
        <Link to='/addshow'>
          <button className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-7">Add New Show</button>
        </Link>
      </form>

      <div className="mt-16 mx-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {shows.map((data, index) => (
            <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.movieName}</h5>
              <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Start Time: {data.timing}</p>
              {/* <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">End Time: 1:00 PM</p> */}
              <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Date: {data.date}</p>
              <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">Price: {data.price}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Edit
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
