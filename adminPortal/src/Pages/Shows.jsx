import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import baseURL from '../DB';
import { CinemaState } from '../Context/CinemaProvider';
import { useNavigate } from 'react-router-dom';

export default function Shows() {
  const { user } = CinemaState();
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  const fetchShows = async (req, res) => {
    try {
      if (!user) {
        return res.status(404).json({ message: "Shows Not Found" });
      }
      const { data } = await axios.get(`${baseURL}/admin/allShows/${user.id}`);
      setShows(data);

    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/admin/delete/${user.id}/show/${id}`);
      navigate('/shows');
    } catch (error) {
      console.log(error);
    }
  }
  const handleEdit = (data) => {
    // console.log("Shows" + data);
    navigate('/EditShow', { state: { data } });
  }
  useEffect(() => {
    fetchShows();
  }, [user, shows]);

  return (
    <div className='mb-10 w-[80%] mx-auto'>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Shows</h1>
      <form className='flex w-full justify-center items-center'>
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

              <div className='flex flex-row justify-between'>
                <button onClick={() => handleEdit(data)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Edit
                </button>
                <button onClick={() => handleDelete(data._id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
