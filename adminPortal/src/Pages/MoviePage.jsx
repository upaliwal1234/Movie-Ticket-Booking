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
    <div>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Movies</h1>
      <div className="flex justify-center items-center">
  <input
    className="border w-3/4 p-3 mt-7 mr-2"
    type="text"
    placeholder="Search Movie . . ."
  />
  <button className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-7">Add New Movie</button>
</div>

      <div className="mt-16 mx-10">
      <div className="card grid grid-cols-3 gap-10">
        {movies.map((item) => (
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
