import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../DB';
import { useNavigate } from 'react-router-dom';

export default function CinemaInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cinemaData, setCinemaData] = useState({});
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize selectedDate here
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  let [date, setDate] = useState(selectedDate.toLocaleDateString());

  const fetchCinemaData = async () => {
    try {
      let response = await axios.get(`${baseURL}/cinema/${id}`);
      console.log(response.data);
      setCinemaData(response.data);
      setShows(response.data.shows);
      setMovies(response.data.movies);
    } catch (err) {
      console.error('Error in fetching data', err);
    }
  }

  // HashMap is initialized to store movie names as keys and an array of corresponding show timings as values.
  const hashMap = new Map();
  for (let i = 0; i < shows.length; i++) {
    date = date.split('/').join('-');
    if (shows[i].date === date) {
      if (!hashMap.has(shows[i].movieName)) {
        hashMap.set(shows[i].movieName, []);
      }
      hashMap.get(shows[i].movieName).push(shows[i]);
    }
  }
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  const handleDateChange = (daysToAdd) => {
    const newDate = new Date(selectedDate);
    newDate.setHours(0, 0, 0, 0);
    newDate.setDate(selectedDate.getDate() + daysToAdd);
    setSelectedDate(newDate);
    setDate(newDate.toLocaleDateString("en-IN", options));
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  const priceRanges = [
    '0-100',
    '100-200',
    '200-300',
    '300-400',
    '400-500',
    '500-600',
    '600-700',
  ];
  const findMovieId = (movieName) => {
    const movie = movies.find(movie => movie.name === movieName);
    return movie ? movie._id : null;
  };

  useEffect(() => {
    fetchCinemaData();
  }, []);

  return (
    <div className='min-h-screen'>
      <div className=''>
        <div className="bg-white p-6 px-32 rounded-md border-2">
          <h1 className="text-2xl font-bold mb-2 text-black">{cinemaData.cinemaName}</h1>
          <p className="text-black">{cinemaData.address}</p>
        </div>
        <div className="bg-white p-6 px-32 rounded-md border-1 flex items-center justify-between">
          <div className="flex items-center">

            <button
              className={`text-blue-500 p-4 border-gray-400 shadow-md border rounded-md hover:text-blue-700 focus:outline-none ${selectedDate.getDate() == (new Date()).getDate() ? 'bg-blue-gray-300 hover:none' : ''}`}
              onClick={() => handleDateChange(-1)} disabled={selectedDate.getDate() == (new Date()).getDate() ? true : false}
            >
              &lt;
            </button>
            <div className="ml-4 w-72">
              <h1 className="text-lg font-bold mb-2 text-black">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </h1>
              <p className="text-black">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </p>
            </div>
            <button
              className={`ml-4 border-gray-400 border p-4 shadow-md rounded-md text-blue-500 hover:text-blue-700 focus:outline-none ${selectedDate.getDate() > (new Date()).getDate() + 6 ? 'bg-blue-gray-300 hover:none' : ''}`}
              onClick={() => handleDateChange(1)} disabled={selectedDate.getDate() > (new Date()).getDate() + 6 ? true : false}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 px-20 bg-gray-200 h-[400px]">
        <div className="bg-white">
          <div className="flex text-xs justify-end px-4 py-2 items-center gap-4 font-extralight border-b">
            <div className="flex items-center gap-2">
              <div className=" w-2.5 h-2.5 bg-light-green-400 rounded-full" />
              <h1>Available</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className=" w-2.5 h-2.5 bg-red-400 rounded-full" />
              <h1>Fast Filling</h1>
            </div>
          </div>

          <div>
            {Array.from(hashMap).map(([key, value], index) => (
              <div key={index} className="border-b min-h-24 py-5 px-12 flex gap-2">
                <div className='flex flex-center items-center w-[300px]'>
                  <Link to={`/movies/${key}/${findMovieId(key)}`} className="text-stone-500 hover:underline">
                    {key}
                  </Link>
                </div>
                <div className="flex gap-4">
                  {value.map((item, index) => (
                    <Link to={`/buytickets/${key}/${item.date}/show/${item._id}`} key={index} className="border border-gray-500 rounded my-1 px-10 py-1 flex justify-center items-center text-sm font-light text-green-500">
                      {item.timing}
                    </Link>
                  ))}
                </div>
              </div>
            )
            )}
          </div>


        </div>
      </div>
    </div>
  )
}