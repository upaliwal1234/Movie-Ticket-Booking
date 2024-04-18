import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../DB';
import { CinemaState } from '../Context/CinemaProvider';
import { useNavigate } from 'react-router-dom';

export default function AddShow() {
  // State variables for each input field
  const [movieName, setMovieName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const { user } = CinemaState();
  const [movies, setMovies] = useState([
    // { 'name': 'kungfu' },
    // { 'name': 'kungfu' },
    // { 'name': 'kungfu' },
  ]);
  const navigate = useNavigate();
  // Event handlers for input changes

  useEffect(() => {
    fetchMovies();
  }, [user])

  console.log(movies);
  const fetchMovies = async () => {
    if (!user) {
      return;
    }
    try {
      const { data } = await axios.get(`${baseURL}/admin/profile/${user.id}`);
      // console.log(data);
      if (data) {
        setMovies(data.movies);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can perform the submission logic
    try {
      const response = await axios.post(`${baseURL}/admin/movie/addshow`, {
        timing: startTime,
        date,
        movieName,
        seating: [
          [
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
          ],
          [
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
          ],
          [
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
            { isSeat: true, isAvailable: true, isBooked: false },
          ],
        ],
        price,
        cinema: user.id
      })
      if (response) {
        console.log(response.data);
        navigate('/shows');
      }
    } catch (error) {
      console.log(error);
    }
    console.log('Movie Name:', movieName);
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);
    console.log('Date:', date);
    console.log('Price:', price);
  };

  return (
    <div className="flex justify-center my-10">
      <form onSubmit={handleSubmit} className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center text-red-500">Add New Show</h2>
        <div className="mb-4">
          <label htmlFor="movieName" className="block mb-1">
            Movie Name:
          </label>
          <select
            type="text"
            id="movieName"
            name="movieName"
            value={movieName}
            onChange={handleMovieNameChange}
            className="border w-full p-2"
            placeholder="Enter movie name..."
            required
          >
            <option value='' className='' selected disabled hidden>Select a Movie</option>
            {movies && movies.map((data, index) => (
              <option key={index} value={data.name} className=''>{data.name}</option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-4 relative z-0 group">
            <label htmlFor="timing" className="block mb-1">
              Start Time:
            </label>
            <input
              type="time"
              id="timing"
              name="timing"
              value={startTime}
              onChange={handleStartTimeChange}
              className="border w-full p-2"
              placeholder="Enter start time..."
              required
            />
          </div>
          <div className="mb-4 relative z-0 group">
            <label htmlFor="endTime" className="block mb-1">
              End Time:
            </label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={endTime}
              onChange={handleEndTimeChange}
              className="border w-full p-2"
              placeholder="Enter end time..."
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-4 relative z-0 group">
            <label htmlFor="date" className="block mb-1">
              Date (YYYY-MM-DD):
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              className="border w-full p-2"
              placeholder="Enter date..."
              required
            />
          </div>
          <div className="mb-4 relative z-0 group">
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={handlePriceChange}
              className="border w-full p-2"
              placeholder="Enter price..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}
