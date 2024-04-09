import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function MoviePage() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setMovieName(e.target.value);
  }
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let response = await axios.get('http://localhost:8888/movies');
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  const handleClick = async () => {
    setSuggestions([]);
    fetchdata();
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      handleSearch();
    }, 2000);
    return () => clearTimeout(timer);
  }, [movieName]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/admin/search/movie/autoComplete/${movieName}`);
      setSuggestions(Array.isArray(response.data) ? response.data : []);
      console.log(suggestions);
    }
    catch (e) {
      console.log(e);
    }
  }
  const fetchdata = async () => {
    try {
      let response = await axios.get(`http://localhost:8888/admin/search/movie/${movieName}`);
      if (response.status === 200) {
        // let data = response.data;
        setMovieName('');
        navigate('/moviePage');
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
    <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Movies</h1>
      <div className="flex justify-center items-center">
        <input
          className="border w-3/4 p-3 mt-7 mr-2"
          type="text"
          value={movieName}
          onChange={handleChange}
          placeholder="Search Movie . . ."
        />
        <button className='m-1' type='submit' onClick={handleClick}>
          <svg className='w-5 fill-gray-500 mr-1 hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
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

      <div className="mt-16 mx-10">
        <div className="card grid grid-cols-3 gap-10">
          {data.map((item) => (
            <div className="text-center border rounded-md p-4" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <h5 className="text-lg font-semibold">{item.title}</h5>
              <h4 className="text-lg text-gray-500">{item.year}</h4>
              <h4 className="text-lg text-gray-500">{item.director}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default MoviePage;
