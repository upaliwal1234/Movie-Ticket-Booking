import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CinemaState } from "../Context/CinemaProvider";
import baseURL from '../DB';

function MoviePage() {

  const [movies, setMovies] = useState([]);
  const { user } = CinemaState();
  const fetchData = async () => {
    try {
      if (!user) return;
      const response = await axios.get(`${baseURL}/admin/movies/${user.id}`);
      console.log(response);
      if (!response) {
        console.log("Error");
      }
      else {
        setMovies(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, [user])

  return (
    <div>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Movies</h1>
      <div className="mt-10 mx-8">
        <div className="card grid grid-cols-3 gap-10">
          {movies.map((item) => (
            <div className="text-center border rounded-md w-[20rem]" key={item.id}>
              <img src={item.poster} className="w-full" alt="" />
              <h5 className="text-lg font-semibold">{item.name}</h5>
              <h4 className="text-lg text-gray-500">{item.releaseDate}</h4>
              <h4 className="text-lg text-gray-500">{item.
                desc}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default MoviePage;
